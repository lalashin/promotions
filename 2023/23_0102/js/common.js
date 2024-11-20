
( function(){
    var _body = jQuery('body');

    this.Common = {

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
            return Common.post(jQuery.extend(data,
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
                    Common.append2Form(_form, data);
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
                    Common.append2Form(_form, val, (upKey ? upKey+'['+key+']' : key));
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
    }
} )( window );

