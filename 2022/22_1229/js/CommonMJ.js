
( function(){
    var _body = jQuery('body');

    this.CommonMJ = {

        // copy to clipboard
        copyClipboard: function(txt, msg) {
            event.preventDefault();

            if (txt) {
                var _temp = jQuery('<textarea>').appendTo('body').val(txt).select();
                document.execCommand('copy');
                _temp.remove();

                if (msg && typeof msg == 'function') {
                    msg();

                } else if (msg !== false) {
                    alert((msg ? msg : '복사 되었습니다.'));
                }
            }
            return false;
        },

        AddComma: function(data_value) {
            var txtNumber = '' + data_value;

            if( isNaN(txtNumber) || txtNumber == '' ) {
                //alert('숫자만 입력 하세요.');
                return;
            } else {
                var rxSplit = new RegExp('([0-9])([0-9][0-9][0-9][,.])');
                var arrNumber = txtNumber.split('.');
                arrNumber[0] += '.';

                do {
                    arrNumber[0] = arrNumber[0].replace(rxSplit, '$1,$2');
                } while (rxSplit.test(arrNumber[0]));

                if( arrNumber.length > 1 ) {
                    return arrNumber.join('');
                } else {
                    return arrNumber[0].split('.')[0];
                }
            }
        },
        //
        // ajax post with add option(crossDomain)
        post: function(data) {
            return jQuery.ajaxQueue(jQuery.extend(data, { method:'post', xhrFields:{ withCredentials:true } }));
        },

        // ajax post with add option(crossDomain) with File
        postWithFile: function(data) {
            return CommonMJ.post(jQuery.extend(data,
                                             {
                                               cache: false,
                                               dataType: 'json',
                                               type: 'POST',
                                               processData: false, // Don't process the files
                                               contentType: false  // Set content type to false as jQuery will tell the server its a query string request
                                             }));
        },

        sprintf: function(text) {
            var i = 0, args = [];

            if (arguments.length) {
                Array.prototype.push.apply(args, arguments);
            }

            if (jQuery.isArray(args[1])) {
                args = args[1];
            } else {
                args.shift();
            }

            return text.replace(/%s/g, function() {
                return (i < args.length) ? args[i++] : '';
            });
        },

        submitUrl: function(url, data, target) {

            if (url) {
                var _form = jQuery('<form action="'+url+'" method="post"></form>').appendTo('body');

                if (target) {
                    _form.attr('target', target);
                }
                
                if (data) {
                    CommonMJ.append2Form(_form, data);
                }
                _form.submit();
            }
            return false;
        },

        append2Form: function(_form, data, upKey) {

            if (upKey === undefined) {
                upKey = '';
            }

            if (jQuery.isPlainObject(data) || jQuery.isArray(data)) {
                jQuery.each(data, function(key, val) {
                    CommonMJ.append2Form(_form, val, (upKey ? upKey+'['+key+']' : key));
                });
            } else if (upKey) {
                jQuery('<input type="hidden" />').attr('name', upKey)
                                                 .attr('value', data)
                                                 .appendTo(_form);
            }
        },

        storage: function(name, key, val) {
            var data = JSON.parse(localStorage[name] || '{}');

            // set data
            if (key && key.constructor == Object) {
                localStorage[name] = JSON.stringify(key)

            // get data
            } else if (key === undefined) {
                return data;

            // get data[key]
            } else if (val === undefined) {
                return data[key];

            // set data[key]
            } else {
                data[key] = val;
                localStorage[name] = JSON.stringify(data);
            }
        },

        jqCheckAll: function() {
            var _WrapS = jQuery(this);

            _WrapS.each(function() {
                var _wrap = jQuery(this)
                    .on('change', '.jqCheckAll', function(event) { event.preventDefault(); event.stopPropagation(); var _this = jQuery(this);
                        jQuery(':checkbox[name="'+this.name+'"]:not(".jqCheckAll")', _wrap).prop('checked', this.checked);
                    });
            });
            return _WrapS;
        },

        jqEnter: function() {
            var _WrapS = jQuery(this);

            _WrapS.each(function() {
                var _wrap = jQuery(this)
                    .on('keydown', '.jqEnterFrom', function(event) { var _this = jQuery(this);
                        if (event.keyCode == 13) {
                            event.preventDefault();
                            event.stopPropagation();
                            jQuery('.jqEnterTo', _wrap).trigger('click');
                        }
                    });
            });
            return _WrapS;
        },

        exportTable: function(filename) {
            var table = this;

            if (table instanceof jQuery) {
                table = table.get(0);
            }

            if (table.tagName == 'TABLE' && filename) {
                var csvString = "\uFEFF",
                    csvArr = [];

                for (var rowCnt = 0; rowCnt < table.rows.length; rowCnt++) {
                    var rowData = table.rows[rowCnt].cells,
                        rowArr = [];

                    for (var colCnt = 0; colCnt < rowData.length; colCnt++) {
                        var colData = rowData[colCnt].innerText;

                        if (colData == null || colData.length == 0) {
                            colData = "".replace(/"/g, '""');

                        } else {
                            colData = colData.toString().replace(/"/g, '""');
                        }
                        rowArr.push('"' + colData + '"');
                    }
                    csvArr.push(rowArr.join(','));
                }
                csvString += csvArr.join("\r\n");

                // IE 10, 11, Edge Run
                if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                    var blob = new Blob([ decodeURIComponent(csvString) ], { type: 'text/csv;charset=utf8' });

                    window.navigator.msSaveOrOpenBlob(blob, filename);

                // HTML5 Blob
                } else if (window.Blob && window.URL) {
                    var blob = new Blob([ csvString ], { type: 'text/csv;charset=utf8' }),
                        csvUrl = URL.createObjectURL(blob),
                        a = document.createElement('a');

                    a.setAttribute('style', 'display:none');
                    a.setAttribute('href', csvUrl);
                    a.setAttribute('download', filename);
                    document.body.appendChild(a);
                    a.click()
                    a.remove();

                // Data URI
                } else {
                    var csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csvString),
                        blob = new Blob([csvString], { type: 'text/csv;charset=utf8' }),
                        csvUrl = URL.createObjectURL(blob),
                        a = document.createElement('a');

                    a.setAttribute('style', 'display:none');
                    a.setAttribute('target', '_blank');
                    a.setAttribute('href', csvData);
                    a.setAttribute('download', filename);
                    document.body.appendChild(a);
                    a.click()
                    a.remove();
                }
            }
            return false;
        },

        onResizeEnd: function(callback, msec) { var _obj = jQuery(this);

            if (jQuery.isFunction(callback)) {
                _obj.on('resize', function() {
                    if (this.resizeEnd) { clearTimeout(this.resizeEnd); }
                    this.resizeEnd = setTimeout(callback, (msec || 500));
                });
            }
        },

        fileLoad: function(obj, config) { var _wrap = jQuery(obj);
            config = jQuery.extend({
                                     // (자동추가) <form> 
                                     // (자동추가) <input:file> , [NEED] inside form
                                     accept  : '',          // string : file open filter ex) "image/*"
                                     data    : '.upData',   // <tag>  : image encoded data
                                     name    : '.upName',   // <tag>  : filename display
                                     view    : '.upView',   // <tag>  : image preview display
                                     open    : '.upOpen',   // <tag>  : file select button
                                     reset   : '.upReset',  // <tag>  : file explorer open button
                                     onChange: null,  // <function> : file-change function(data or false);
                                   },
                                   config || {});

            if (!CommonMJ || !CommonMJ.postWithFile)  { console.log('need Common');      return false; }
            else if (!_wrap || _wrap.length != 1) { console.log('need 1 wrap');      return false; }
            else if (_wrap.hasClass('fileLoad'))  { console.log('already fileLoad'); return false; }

            _wrap.find('form[name="fileLoadForm"]').remove();

            // 자동추가
            config.form = jQuery('<form>',  { name:'fileLoadForm', method:'post', style:'display:none;' }).appendTo(_wrap);
            config.file = jQuery('<input>', { name:'fileLoadFile', type:'file', accept:config.accept }).appendTo(config.form);

            jQuery.each(config, function(k, v) {

                if (k == 'accept') {
                    if (typeof v !== 'string') { config.accept = ''; }

                } else if (k == 'onChange') {
                    if (typeof v !== 'function') { config.onChange = null; }

                } else if (v) {
                    if (!(v instanceof jQuery)) { config[k] = jQuery(v, _wrap); }
                    if (!config[k] || !config[k].length) { config[k] = null; }
                }
            });

            var reader = null;

            _wrap.addClass('fileLoad')
                .on('set-name', function(event, filename) {

                    if (config.name) {
                        if (config.name.prop('tagName') == 'INPUT') { config.name.val(filename || ''); }
                        else                                        { config.name.text(filename || ''); }
                    }
                })
                .on('set-view',  function(event, source) {

                    if (config.view) {

                        if (source && config.view.prop('tagName') == 'IMG') {
                            config.view.attr('src', source);

                        } else if (source) {
                            var _img = config.view.find('img:first');

                            if (_img && _img.length) { _img.attr('src', source); }
                            else                     { jQuery('<img>', { src:source }).appendTo(config.view); }

                        } else if (config.view.prop('tagName') == 'IMG') {
                            config.view.attr('src', '');

                        } else {
                            config.view.find('img:first').remove();
                        }
                    }
                })
                .on('set-data',  function(event, postdata) {

                    if (config.data) {
                        if (config.data.prop('tagName') == 'INPUT') { config.data.val(postdata || ''); }
                        else                                        { config.data.text(postdata || ''); }
                    }
                })
                .on('set-reset',        function() {
                    _wrap.trigger('set-name', '');
                    _wrap.trigger('set-view', '');
                    _wrap.trigger('set-data', '');
                    config.file.val('');
                    if (config.onChange) { config.onChange(false); }
                })
                .trigger('set-reset');

            config.file
                .on('change', function(event) { var _this = jQuery(this);

                    if (this.files && this.files[0]) {
                        var filename = this.files[0].name,
                            filesize = this.files[0].size;

                        if (!isNaN(filesize) && filesize > 20*1024*1024) {
                            alert('20MB 이하 인 파일만 업로드 하실 수 있습니다.');
                            return false;
                        }

                        if (reader) {
                            _wrap.trigger('set-name', filename);
                            reader.readAsDataURL(this.files[0]);

                        } else {
                            var fileKey = config.file.attr('name');
                                formData = new FormData(config.form[0]);

                            CommonMJ.postWithFile({ url:'/include/encodeFile.php?name=' + fileKey, data:formData, })
                                .done(function(result) { if (result.alertmsg || false) { alert(result.alertmsg); }

                                    if (result.errno == '0') {
                                        _wrap.trigger('set-name', filename);
                                        _wrap.trigger('set-view', result.data[0]);
                                        _wrap.trigger('set-data', result.data[0]);

                                        if (config.onChange) { config.onChange(result.data[0]); }

                                    } else if (config.onChange) { config.onChange(false); }
                                });
                        }
                    }
                });

            if (config.reset) {
                config.reset.on('click', function(event) { event.preventDefault(); event.stopPropagation(); _wrap.trigger('set-reset'); });
            }
            if (config.open) {
                config.open.on('click', function(event) { event.preventDefault(); event.stopPropagation(); config.file.trigger('click'); });
            }

            if (FileReader || false) {
                reader = new FileReader();

                reader.onload = function (event) {
                    _wrap.trigger('set-view', event.target.result);
                    _wrap.trigger('set-data', event.target.result);
                    if (config.onChange) { config.onChange(event.target.result); }
                }
            }

            _wrap.config = config;
            return _wrap;
        },

    }
} )( window );

