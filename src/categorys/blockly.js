Blockly.Blocks['run'] = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Run");
    this.setColour(45);
 this.setTooltip("Runs the code.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['alert'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Alert")
        .appendField(new Blockly.FieldTextInput("hello world"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Alerts a string.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['console_log'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("console type:")
        .appendField(new Blockly.FieldDropdown([["Normal","NORMAL"], ["Warning","WARNING"], ["Error","ERROR"]]), "TYPE")
        .appendField(new Blockly.FieldTextInput("text"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Logs a string in the console.");
 this.setHelpUrl("");
  }
};
