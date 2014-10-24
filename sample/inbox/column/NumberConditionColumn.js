/**
 * Created by zj on 13-12-17.
 */
Ext.define("inbox.column.NumberConditionColumn", {
    extend: 'Ext.grid.column.Column',
    alias: 'widget.numberconditioncolumn',
    alternateClassName: 'inbox.column.NumberConditionColumn',
    zeroText : "0",
    oneText : "1",
    undefinedText: '&#160;',
    constructor: function(cfg){
        this.callParent(arguments);
        var zeroText      = this.zeroText,
            oneText     = this.oneText,
            undefinedText = this.undefinedText;

        this.renderer = function(value){
            if(value === undefined){
                return undefinedText;
            }
            if(value === 0){
                return '<font color="red">'+zeroText+'</font>';
            }
            return oneText;
        };
    }
});