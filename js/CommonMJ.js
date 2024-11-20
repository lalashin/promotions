
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

        //
        // ajax post with add option(crossDomain)
        post2: function(data, fn) {
            return CommonMJ.post(jQuery.extend(data, { method:'post', xhrFields:{ withCredentials:true } }))
                    .done(function(result) {
                        if (result.alertmsg || false) { alert(result.alertmsg); }
                        if (result.errno == 2) {
                            alert('로그인이 필요한 서비스입니다.');
                            location.href = '/member/login.php?url='+encodeURIComponent(location.href);
                        }
                        if (jQuery.isFunction(fn)) {
                            fn(result);
                        }
                    });
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
                        jQuery(':checkbox[name="'+this.name+'"]:not(".jqCheckAll")', _wrap).prop('checked', this.checked).trigger('change');
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
        jqCounter: function(eymd, his) {
            var _wrap = jQuery(this),
                e = eymd.split('-'),
                ey = parseInt(e[0], 10),
                em = parseInt(e[1], 10),
                ed = parseInt(e[2], 10);

            if (eymd && ey && em && ed && !isNaN(ey) && !isNaN(em) && !isNaN(ed) && _wrap && _wrap.length) {
                var fn = function() {
                            var dday = new Date(ey, em-1, ed+1, 0,0,0), // 다음날 0시 종료
                                now  = new Date(),                      // 현재 날짜
                                secs = (dday - now)/1000;
        
                            if (his) {
                                var et = (his || '').split(':'),
                                    eh = parseInt(et[0], 10) || 0,
                                    ei = parseInt(et[1], 10) || 0,
                                    es = parseInt(et[2], 10) || 0;
                                dday = new Date(ey, em-1, ed, eh, ei, es);  // 당일 eh시 ei분 es초 종료
                                secs = (dday - now)/1000;
                            }

                            if (secs > 0) {
                                var d = Math.floor(secs/86400) || 0,
                                    h = Math.floor((secs%86400)/3600) || 0,
                                    m = Math.floor((secs%3600)/60) || 0,
                                    s = Math.floor(secs%60) || 0;

                                jQuery('.d', _wrap).text(d); jQuery('.d1', _wrap).text(d <  10 ? 0 : Math.floor(d/10)); jQuery('.d2', _wrap).text(d%10);
                                jQuery('.h', _wrap).text(h); jQuery('.h1', _wrap).text(h <  10 ? 0 : Math.floor(h/10)); jQuery('.h2', _wrap).text(h%10);
                                jQuery('.m', _wrap).text(m); jQuery('.m1', _wrap).text(m <  10 ? 0 : Math.floor(m/10)); jQuery('.m2', _wrap).text(m%10);
                                jQuery('.s', _wrap).text(s); jQuery('.s1', _wrap).text(s <  10 ? 0 : Math.floor(s/10)); jQuery('.s2', _wrap).text(s%10);
                            }
                        },
                    dday = new Date(ey, em-1, ed+1, 0, 0, 0),   // 다음날 0시 종료
                    now  = new Date(),                          // 현재 날짜
                    secs = (dday - now)/1000;

                if (secs > 0) {
                    fn();
                    setInterval(fn, 1000);
                }
            }
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

        fileLoad: function(obj, config) {
            if (obj instanceof jQuery) { var _wrap = obj; }
            else                       { var _wrap = jQuery(obj); }

            config = jQuery.extend({
                                     // (자동추가) <form>
                                     // (자동추가) <input:file> , [NEED] inside form
                                     accept  : '',          // string : file open filter ex) "image/*"
                                     data    : '.upData',   // <tag>  : image encoded data
                                     name    : '.upName',   // <tag>  : filename display
                                     view    : '.upView',   // <tag>  : image preview display
                                     open    : '.upOpen',   // <tag>  : file select button
                                     reset   : '.upReset',  // <tag>  : file explorer open button
                                     MB      : 20,          // 20MB
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

                } else if (v && k != 'MB') {
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

                        if (!isNaN(filesize) && filesize > config.MB*1024*1024) {
                            alert(config.MB + 'MB 이하 인 파일만 업로드 하실 수 있습니다.');
                            return false;
                        }

                        if (reader) {
                            _wrap.trigger('set-name', filename);
                            reader.readAsDataURL(this.files[0]);

                        } else {
                            var fileKey = config.file.attr('name');
                                formData = new FormData(config.form[0]);

                            CommonMJ.postWithFile({ url:'/common/encodeFile.php?name=' + fileKey, data:formData, })
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

        imageDrop: function(obj, config) { var _wrap = jQuery(obj);
            config = jQuery.extend({
                                     accept  : '',          // string : file open filter ex) "image/*"
                                     data    : '.upData',   // <tag>  : image encoded data
                                     name    : '.upName',   // <tag>  : filename display
                                     view    : '.upView',   // <tag>  : image preview display + drop, 필수
                                     //open    : '.upOpen',   // <tag>  : file select button
                                     //reset   : '.upReset',  // <tag>  : file explorer open button
                                     onChange: null,  // <function> : file-change function(data or false);
                                   },
                                   config || {});

            if (!CommonMJ || !CommonMJ.postWithFile)  { console.log('need Common');      return false; }
            else if (!_wrap || _wrap.length != 1) { console.log('need 1 wrap');      return false; }
            else if (_wrap.hasClass('imageDrop'))  { console.log('already imageDrop'); return false; }

            jQuery.each(config, function(k, v) {

                if (k == 'accept') {
                    if (typeof v !== 'string') { config.accept = 'image/*'; }

                } else if (k == 'onChange') {
                    if (typeof v !== 'function') { config.onChange = null; }

                } else if (v) {
                    if (!(v instanceof jQuery)) { config[k] = jQuery(v, _wrap); }
                    if (!config[k] || !config[k].length) { config[k] = null; }
                }
            });

            var reader = null;

            _wrap.addClass('imageDrop')
                .on('set-name', function(event, filename) {

                    if (config.name) {
                        if (config.name.prop('tagName') == 'INPUT') { config.name.val(filename || ''); }
                        else                                        { config.name.text(filename || ''); }
                    }
                })
                .on('set-view',  function(event, source) {

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
                });

            if (FileReader || false) {
                reader = new FileReader();

                reader.onload = function (event) {
                    _wrap.trigger('set-view', event.target.result);
                    _wrap.trigger('set-data', event.target.result);
                    if (config.onChange) { config.onChange(event.target.result); }
                }
            }

            config.view
                .on('dragover dragenter', function(event) { event.preventDefault(); event.stopPropagation(); jQuery(this)   .addClass('dragenter'); })
                .on('dragleave',          function(event) { event.preventDefault(); event.stopPropagation(); jQuery(this).removeClass('dragenter'); })
                .on('drop',               function(event) { event.preventDefault(); event.stopPropagation();
                    var _fList = event.originalEvent.dataTransfer.files;

                    if (_fList && _fList.length > 0) {
                        if (_fList.length > 1) { alert('파일 1개만 가능합니다.'); return; }

                        var filename = _fList[0].name,
                            filesize = _fList[0].size;

                        if (!isNaN(filesize) && filesize > 20*1024*1024) {
                            alert('20MB 이하 인 파일만 업로드 하실 수 있습니다.');
                            return false;
                        }

                        if (reader) {
                            _wrap.trigger('set-name', filename);
                            reader.readAsDataURL(_fList[0]);

                        } else {
                            var fileKey = config.file.attr('name');
                                formData = new FormData(config.form[0]);

                            CommonMJ.postWithFile({ url:'/common/encodeFile.php?name=' + fileKey, data:formData, })
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

            _wrap.config = config;
            return _wrap;
        },

        appendUrl: function(url, postdata) {

            if (this instanceof jQuery) { var _wrap = this; }
            else                        { var _wrap = jQuery(this+''); }

            if (url && _wrap.length) {

                if (postdata) {
                    jQuery.post(url, postdata,
                                function(data) {
                                    if (data) { _wrap.append(data).trigger('load'); }
                                });
                } else {
                    jQuery.get(url, function(data) {
                        if (data) { _wrap.append(data).trigger('load'); }
                    });
                }
            }
            return false;
        },

        scrollTo: function(sel, addTop, speed) {
            var _obj = jQuery(sel).first();

            if (_obj && _obj.length) {
                jQuery('html,body').animate({ scrollTop:_obj.offset().top + (addTop || 0) }, (speed || 600));
            }
            return false;
        },

        click2Youtube: function(callback) {
            if (this instanceof jQuery) { var _list = this; }
            else                        { var _list = jQuery(this); }

            if (_list.length) {
                _list
                    .on('click', function(event) { event.preventDefault(); var _p = jQuery(this);
                        var code = _p.data('code');

                        if (callback && typeof callback == 'function') {
                            callback(code);

                        } else if (code && !_p.children('iframe').length) {
                            _p.prepend('<iframe width="100%" height="100%" ' +
                                        'src="https://www.youtube.com/embed/' + code + '?autoplay=1" ' +
                                        'allow="autoplay" ' +
                                        'frameborder="0" ' +
                                        'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>');
                        }
                    });
           }
        },
        playVideo: function(obj, addParam) {
            var _obj = jQuery(obj),
                param = {
                          vc    : (_obj.data('vc'   ) || ''),
                          vtype : (_obj.data('vtype') || ''),
                        };

            param = jQuery.extend(param, (addParam || {}));

            if (param.tc && param.vc) {

                // MO Streaming
                if (is_touch_device()) {

                    if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i))||(navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
                        param.mtype = 'iOS';

                    } else if (navigator.userAgent.match(/Android/i)) {
                        param.mtype = 'Android';
                    }
                }

                if (param.hasOwnProperty('mtype') && param.mtype) {
                    jQuery.ajax({
                                  url:   '/AquanPlayer/play.php?' + jQuery.param(param),
                                  type:  'GET',
                                  async: false,
                                  dataType : 'json',
                                  success: function(result) { if (result.alertmsg) { alert(result.alertmsg); }

                                    if (result.errno == 0) {
                                        if (param.mtype == 'iOS') { CommonMJ.chkInstall(); }
                                        self.location.href = result.url;
                                    }
                                  }
                                });

                } else {
                    var win = window.open('/AquanPlayer/play.php?' + jQuery.param(param), '미래인재컴퍼니', 'width=1400,height=680,toolbar=0,status=0,menubar=0,location=0');
                    win.focus();
                }

            } else {
                alert('등록된 영상이 없습니다.');
            }
            return false;
        },
        chkInstall: function() {
            heartbeat = setInterval(
                                    function() {
                                        if(document.webkitHidden || document.hidden) {
                                            if (typeof heartbeat !== undefined) { clearInterval(heartbeat); }
                                            if (typeof timer     !== undefined) { clearTimeout(timer); }
                                            //clearTimers();
                                            //console.log('앱이 설치 되어 있습니다.');
                                        }
                                    },
                                    200);

            var deLay = 3000;
            timer = setTimeout(function() {
                window.location = "https://itunes.apple.com/kr/app/aquanmanager/id1048325731";
            }, deLay);
        },
        freeVideo: function(obj, addParam) {
            var _obj = jQuery(obj),
            param = {
                      tc    : (_obj.data('code' ) || ''),
                      vurl  : (_obj.data('vurl' ) || ''),
                      title : (_obj.data('title') || ''),
                    };

            param = jQuery.extend(param, (addParam || {}));

            if (param.vurl) {

                // MO Streaming
                if (is_touch_device()) {

                    if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i))||(navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
                        param.mtype = 'iOS';

                    } else if (navigator.userAgent.match(/Android/i)) {
                        param.mtype = 'Android';
                    }
                }

                if (param.hasOwnProperty('mtype') && param.mtype) {
                    jQuery.ajax({
                                  url:   '/AquanPlayer/free.php?' + jQuery.param(param),
                                  type:  'GET',
                                  async: false,
                                  dataType : 'json',
                                  success: function(result) { if (result.alertmsg) { alert(result.alertmsg); }

                                    if (result.errno == 0) {
                                        if (param.mtype == 'iOS') { CommonMJ.chkInstall(); }
                                        self.location.href = result.url;
                                    }
                                  }
                                });

                } else {
                    var win = window.open('/AquanPlayer/free.php?' + jQuery.param(param), '미래인재컴퍼니', 'width=960,height=600,resizable=yes,top=100,left=100');
                    win.focus();
                }

            } else {
                alert('등록된 영상이 없습니다.');
            }
            return false;
        },
        downVideo: function(param) {

            if (param && param.tc && param.vno) {

                // MO Streaming
                if (is_touch_device()) {

                    if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i))||(navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
                        param.mtype = 'iOS';

                    } else if (navigator.userAgent.match(/Android/i)) {
                        param.mtype = 'Android';
                    }
                }

                if (param.hasOwnProperty('mtype') && param.mtype) {
                    jQuery.ajax({
                                  url:   '/AquanPlayer/down.php?' + jQuery.param(param),
                                  type:  'GET',
                                  async: false,
                                  dataType : 'json',
                                  success: function(result) { if (result.alertmsg) { alert(result.alertmsg); }

                                    if (result.errno == 0) {
                                        if (param.mtype == 'iOS') { CommonMJ.chkInstall(); }
                                        self.location.href = result.url;
                                    }
                                  }
                                });

                } else {
                    var win = window.open('/AquanPlayer/down.php?' + jQuery.param(param), '미래인재컴퍼니', 'width=200,height=200,toolbar=0,status=0,menubar=0,location=0');
                    win.focus();
                }

            } else {
                alert('다운받을 강의를 선택해 주세요.');
            }
            return false;
        },
        popupDetail: function(param) {

            if (param && param.no && param.type) {
                var _DetailPopup = jQuery('#detail_popup');

                if (!_DetailPopup.length) {
                    _DetailPopup = jQuery('<div id="detail_popup" class="popup"></div>').appendTo('body');

                    _DetailPopup
                        .on('open', function(e, data) { e.preventDefault();
                            _DetailPopup.removeClass('pop_course popup2')
                                .addClass((data.type == 'textbook' ? 'popup2' : 'pop_course'));

                            CommonMJ.appendUrl.call(_DetailPopup.empty(), '/include/detailPopup.php', data);
                        })
                        .on('close', function(e) { e.preventDefault(); _DetailPopup.stop().fadeOut(400); })
                        .on('load', function(e, data) { e.preventDefault(); _DetailPopup.stop().fadeIn(400); })
                        .on('click', '.pop_closebtn', function(e) { e.preventDefault(); _DetailPopup.trigger('close'); })
                        .on('click', '.btm .tab_list li a', function(e) { e.preventDefault(); var _this = jQuery(this);
                            var _li = _this.closest('li'),
                                idx = _li.index();

                            _li.addClass('on').siblings('.on').removeClass('on')
                                .closest('.tab_list').next('.contents_list').children('li').removeClass('on')
                                .eq(idx).addClass('on');
                        })
                }
                _DetailPopup.trigger('open', param);
            }
            return false;
        },
        openModal: function(code, wrap) {

            if (code) {
                var _wrap = jQuery(wrap || 'body');

                jQuery.get('/CommonModal/' + code, function(data) {
                    if (data) { _wrap.append(data); }
                });
            }
            return false;
        },
        openModal2: function(code, param) {

            if (code) {
                var url = '/Modal/' + code;

                if (param) { url += '?' + jQuery.param(param); }

                jQuery.get(url, function(data) {
                    if (data) { jQuery('body').append(data); }
                });
            }
            return false;
        },
        // [config]
        //  [ { code:..., btn:..., bbs:..., }, ... ]
        //      - code:  (필수) 등록코드
        //      - btn:   (필수) 등록버튼 selector OR jQuery object + placeholder="..." + siblings('[name="contents"]')
        //      - bbs:   (필수) 게시판 selector OR jQuery object
        //      - callback: (선택) 등록완료시 action
        //  * gubun: _btn.data('gubun')
        //  * msg  : _btn.siblings('[name="contents"]').attr('placeholder')
        //  * _ADMIN 존재할 경우 Admin 모드 활성화
        loadBBS: function(config) {
            if (!jQuery.isArray(config) && config.hasOwnProperty('code') && config.code) { config = [ config ]; }

            var isAdmin = typeof _ADMIN === 'object',
                bbsCnt = 0;

            jQuery.each(config, function(no, cfg) {
                var code  = cfg.code || '',
                    _btn  = cfg.btn instanceof jQuery ? cfg.btn : jQuery(cfg.btn),
                    _bbs  = cfg.bbs instanceof jQuery ? cfg.bbs : jQuery(cfg.bbs),

                    _cont = _btn.siblings('[name="contents"]'),
                    gubun = _btn.data('gubun') || '',
                    msg   = _cont.attr('placeholder') || '내용을 입력해주세요.';

                if (code &&
                        _btn && _btn.length &&
                        _bbs && _bbs.length &&
                        _cont && _cont.length) {
                    bbsCnt++;

                    _btn
                        .on('register', function(event, data) {
                            CommonMJ.post({ url:'/API/apply/insert/' + code, data:data })
                                .done(function(result) { if (result.alertmsg || false) { alert(result.alertmsg); }

                                    if (result.errno == 2) {
                                        alert('로그인이 필요한 서비스입니다.');
                                        location.href = '/member/login.php?url='+encodeURIComponent(location.href);

                                    } else if (result.errno == 0) {

                                        if (typeof cfg.callback === 'function') { cfg.callback(result); }
                                        else { _cont.val(''); _bbs.trigger('reload'); }
                                    }
                                });
                        })
                        .on('click', function(event) { event.preventDefault();
                            var _cont = _btn.siblings('[name="contents"]'),
                                data = jQuery.extend({ gubun:gubun, contents:jQuery.trim(_cont.val()), }, (cfg.data || {}));

                            if (!data.contents.length) {
                                alert(msg);
                                _cont.focus();

                            } else if (isAdmin) {
                                CommonMJ.post({ url:'/API/apply/stat/' + code, data:data })
                                    .done(function(result) { if (result.alertmsg || false) { alert(result.alertmsg); }

                                        if (result.errno == 2) {
                                            alert('로그인이 필요한 서비스입니다.');
                                            location.href = '/member/login.php?url='+encodeURIComponent(location.href);

                                        } else if (result.errno == 0) {
                                            _ADMIN.trigger('open', { listHtml:result.listHtml, top:event.pageY+20, left:event.pageX-250 })
                                                .callback = function(addData) { _btn.trigger('register', jQuery.extend(data, addData)); };
                                        }
                                    });

                            } else {
                                _btn.trigger('register', data);
                            }
                        });

                    _bbs
                        .on('reload', function(event, page) { event.preventDefault(); event.stopPropagation();
                            var data = { gubun:gubun, page: page || _bbs.data('page') || 1, };

                            CommonMJ.post({ url:'/API/apply/list/' + code, data:data })
                                  .done(function(result) { if (result.alertmsg || false) { alert(result.alertmsg); }

                                      if (result.errno == 2) {
                                            alert('로그인이 필요한 서비스입니다.');
                                            location.href = '/member/login.php?url='+encodeURIComponent(location.href);

                                      } else if (result.errno == 0) {
                                          _bbs.data('page', result.pageInfo.page);

                                          jQuery('.listHtml', _bbs).html(result.listHtml);
                                          jQuery('.pageHtml', _bbs).html(result.pageHtml);
                                      }
                                  });
                        })
                        .on('click', '.pageHtml a', function(event) { event.preventDefault(); event.stopPropagation();
                            var _this = jQuery(this),
                                 page = parseInt(_this.data('page'), 10);

                            if (!isNaN(page)) {
                                _bbs.trigger('reload', page);
                            }
                        })
                        .trigger('reload');
                }
            });
            return bbsCnt;
        },

        quickSort: function(arr, getVal, isAsc) {
            if (!arr || !arr.length || arr.length < 2 || typeof getVal !== 'function') { return arr; }

            const pivot = [ arr[0] ];
            const left  = [];
            const right = [];

            const p = getVal(pivot[0]);

            for (let i=1, j=arr.length; i<j; i++) {

            if (getVal(arr[i]) < p) {
                if (isAsc) {  left.push(arr[i]); }
                else       { right.push(arr[i]); }

            } else if (getVal(arr[i]) > p) {
                if (isAsc) { right.push(arr[i]); }
                else       {  left.push(arr[i]); }

            } else         { pivot.push(arr[i]); }
            }
            return jQuery.merge(CommonMJ.quickSort(left, getVal, isAsc), jQuery.merge(pivot, CommonMJ.quickSort(right, getVal, isAsc)));
        }
    }
} )( window );

