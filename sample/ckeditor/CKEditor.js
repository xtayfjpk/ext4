/**
 * Created by zj on 14-1-2.
 */
Ext.define("Ext.ux.form.field.CKEditor", {
    extend: 'Ext.form.field.TextArea',
    alias: 'widget.ckeditor',


    initComponent: function () {
        this.callParent(arguments);
        this.on("afterrender", function(){
            Ext.apply(this.CKConfig, {
               height : this.getHeight()
            });
            this.editor = CKEDITOR.replace(this.inputEl.id, this.CKConfig);
            this.editor.name = this.name;
            this.editor.on("instanceReady", function(){
                //alert("instanceReady");
            });
            this.editor.on("change", function(){
                //alert("change");
            });
        }, this);
    },
    onRender: function (ct, position) {
        if (!this.el) {
            this.defaultAutoCreate = {
                tag: 'textarea',
                autocomplete: 'off'
            };
        }
        this.callParent(arguments)
    },
    setValue: function (value) {
        this.callParent(arguments);
        if (this.editor) {
            this.editor.setData(value);
        }
    },
    getRawValue: function () {
        if (this.editor) {
            return this.editor.getData();
        } else {
            return ''
        }
    },
    getValue: function () {
        return this.getRawValue();
    }
});


