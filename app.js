/**
 * Smart Data Analyzer - Blockly Workflow Builder
 * Vanilla JavaScript + Blockly (v10.0.0)
 * ES6+ syntax, modular architecture
 */

// ============================================================================
// MODULE: Block Definitions
// ============================================================================

const BlockDefinitions = {
  /**
   * Register all custom Blockly blocks
   */
  register() {
    // Initialize Data Processor
    Blockly.Blocks['data_init'] = {
      init() {
        this.appendDummyInput()
          .appendField('🔧 Initialize Data Processor')
          .appendField(new Blockly.FieldTextInput('MyData'), 'NAME');
        this.appendDummyInput()
          .appendField('Description:')
          .appendField(new Blockly.FieldTextInput('Processing session'), 'DESC');
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip('Initialize a new data processing session with a name');
      }
    };

    // Input Dataset
    Blockly.Blocks['data_input'] = {
      init() {
        this.appendDummyInput()
          .appendField('📥 Input Dataset')
          .appendField(new Blockly.FieldTextInput('dataset'), 'VAR');
        this.appendValueInput('VALUE1')
          .setCheck(null)
          .appendField('value 1');
        this.appendValueInput('VALUE2')
          .setCheck(null)
          .appendField('value 2');
        this.appendValueInput('VALUE3')
          .setCheck(null)
          .appendField('value 3');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip('Create a dataset array with multiple values');
      }
    };

    // Transform Data
    Blockly.Blocks['data_transform'] = {
      init() {
        this.appendValueInput('DATA')
          .setCheck(['Array', 'String', 'Number'])
          .appendField('🔄 Transform')
          .appendField(new Blockly.FieldDropdown([
            ['Uppercase', 'UPPERCASE'],
            ['Lowercase', 'LOWERCASE'],
            ['Round', 'ROUND'],
            ['Absolute Value', 'ABS'],
            ['Square', 'SQUARE'],
            ['Square Root', 'SQRT'],
            ['Reverse', 'REVERSE'],
            ['Trim Whitespace', 'TRIM']
          ]), 'TRANSFORM');
        this.appendDummyInput()
          .appendField('store in')
          .appendField(new Blockly.FieldTextInput('result'), 'VAR');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('Transform data using various operations');
      }
    };

    // Filter Dataset
    Blockly.Blocks['data_filter'] = {
      init() {
        this.appendValueInput('ARRAY')
          .setCheck('Array')
          .appendField('🔍 Filter Dataset');
        this.appendDummyInput()
          .appendField('where each item')
          .appendField(new Blockly.FieldDropdown([
            ['>', 'GT'],
            ['>=', 'GTE'],
            ['<', 'LT'],
            ['<=', 'LTE'],
            ['==', 'EQ'],
            ['!=', 'NEQ'],
            ['contains', 'CONTAINS']
          ]), 'OP');
        this.appendValueInput('VALUE')
          .setCheck(null)
          .appendField('than');
        this.appendDummyInput()
          .appendField('store filtered result in')
          .appendField(new Blockly.FieldTextInput('filtered'), 'VAR');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip('Filter an array based on a condition');
      }
    };

    // Calculate Statistics
    Blockly.Blocks['data_statistics'] = {
      init() {
        this.appendValueInput('ARRAY')
          .setCheck('Array')
          .appendField('📊 Calculate Statistics');
        this.appendDummyInput()
          .appendField('compute')
          .appendField(new Blockly.FieldDropdown([
            ['Sum', 'SUM'],
            ['Average', 'AVG'],
            ['Maximum', 'MAX'],
            ['Minimum', 'MIN'],
            ['Count', 'COUNT'],
            ['Range', 'RANGE']
          ]), 'STAT');
        this.appendDummyInput()
          .appendField('store in')
          .appendField(new Blockly.FieldTextInput('stat'), 'VAR');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(60);
        this.setTooltip('Calculate statistical measures from a dataset');
      }
    };

    // Generate Report
    Blockly.Blocks['data_report'] = {
      init() {
        this.appendDummyInput()
          .appendField('📋 Generate Report');
        this.appendValueInput('TITLE')
          .setCheck('String')
          .appendField('Title:');
        this.appendValueInput('DATA')
          .setCheck(null)
          .appendField('Data:');
        this.appendDummyInput()
          .appendField('Format:')
          .appendField(new Blockly.FieldDropdown([
            ['Text Summary', 'TEXT'],
            ['JSON Format', 'JSON'],
            ['Table Format', 'TABLE'],
            ['Detailed Report', 'DETAILED']
          ]), 'FORMAT');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('Generate a formatted report from data');
      }
    };

    // Find Pattern
    Blockly.Blocks['data_find_pattern'] = {
      init() {
        this.appendValueInput('DATA')
          .setCheck(['String', 'Array'])
          .appendField('🔎 Find Pattern');
        this.appendValueInput('PATTERN')
          .setCheck('String')
          .appendField('search for:');
        this.appendDummyInput()
          .appendField('store matches in')
          .appendField(new Blockly.FieldTextInput('matches'), 'VAR');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip('Find patterns or values in data');
      }
    };

    // Sort Dataset
    Blockly.Blocks['data_sort'] = {
      init() {
        this.appendValueInput('ARRAY')
          .setCheck('Array')
          .appendField('🔢 Sort Dataset');
        this.appendDummyInput()
          .appendField('order:')
          .appendField(new Blockly.FieldDropdown([
            ['Ascending (A-Z, 0-9)', 'ASC'],
            ['Descending (Z-A, 9-0)', 'DESC']
          ]), 'ORDER');
        this.appendDummyInput()
          .appendField('store sorted result in')
          .appendField(new Blockly.FieldTextInput('sorted'), 'VAR');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('Sort a dataset in ascending or descending order');
      }
    };

    // Supporting blocks
    Blockly.Blocks['number'] = {
      init() {
        this.appendDummyInput()
          .appendField(new Blockly.FieldNumber(0, null, null, null), 'NUM');
        this.setOutput(true, 'Number');
        this.setColour(230);
        this.setTooltip('A number value');
      }
    };

    Blockly.Blocks['text'] = {
      init() {
        this.appendDummyInput()
          .appendField(new Blockly.FieldTextInput('text'), 'TEXT');
        this.setOutput(true, 'String');
        this.setColour(160);
        this.setTooltip('A text string');
      }
    };

    Blockly.Blocks['array_create'] = {
      init() {
        this.appendDummyInput()
          .appendField('📋 Create Array');
        this.setOutput(true, 'Array');
        this.setColour(330);
        this.setTooltip('Create an empty array');
      }
    };

    Blockly.Blocks['variable_get'] = {
      init() {
        this.appendDummyInput()
          .appendField('📦 Get Variable')
          .appendField(new Blockly.FieldTextInput('var'), 'VAR');
        this.setOutput(true, null);
        this.setColour(260);
        this.setTooltip('Get the value of a variable');
      }
    };
  }
};

// ============================================================================
// MODULE: Code Generators
// ============================================================================

const CodeGenerators = {
  /**
   * Register all JavaScript code generators for custom blocks
   */
  register() {
    const { ORDER_ATOMIC, ORDER_COMMA, ORDER_MEMBER, ORDER_NONE } = Blockly.JavaScript;

    // Initialize Data Processor
    Blockly.JavaScript['data_init'] = (block) => {
      const name = block.getFieldValue('NAME') || 'MyData';
      const desc = block.getFieldValue('DESC') || 'Processing session';
      return `// Initialize Data Processor: ${name}\n` +
             `// Description: ${desc}\n` +
             `console.log("🔧 Initialized: " + "${name}");\n`;
    };

    // Input Dataset
    Blockly.JavaScript['data_input'] = (block) => {
      const variable = block.getFieldValue('VAR') || 'dataset';
      const values = [1, 2, 3]
        .map(i => Blockly.JavaScript.valueToCode(block, `VALUE${i}`, ORDER_COMMA))
        .filter(Boolean);
      
      const valuesCode = values.length > 0 ? values.join(', ') : 'null';
      return `${variable} = [${valuesCode}];\n` +
             `console.log("📥 Dataset created: " + JSON.stringify(${variable}));\n`;
    };

    // Transform Data
    Blockly.JavaScript['data_transform'] = (block) => {
      const data = Blockly.JavaScript.valueToCode(block, 'DATA', ORDER_MEMBER) || 'null';
      const transform = block.getFieldValue('TRANSFORM');
      const variable = block.getFieldValue('VAR') || 'result';
      
      const transformMap = {
        UPPERCASE: `String(${data}).toUpperCase()`,
        LOWERCASE: `String(${data}).toLowerCase()`,
        ROUND: `Math.round(Number(${data}))`,
        ABS: `Math.abs(Number(${data}))`,
        SQUARE: `Math.pow(Number(${data}), 2)`,
        SQRT: `Math.sqrt(Number(${data}))`,
        REVERSE: `Array.isArray(${data}) ? ${data}.slice().reverse() : String(${data}).split("").reverse().join("")`,
        TRIM: `String(${data}).trim()`
      };
      
      const transformCode = transformMap[transform] || data;
      return `${variable} = ${transformCode};\n` +
             `console.log("🔄 Transformed: " + JSON.stringify(${variable}));\n`;
    };

    // Filter Dataset
    Blockly.JavaScript['data_filter'] = (block) => {
      const array = Blockly.JavaScript.valueToCode(block, 'ARRAY', ORDER_MEMBER) || '[]';
      const op = block.getFieldValue('OP');
      const value = Blockly.JavaScript.valueToCode(block, 'VALUE', ORDER_NONE) || '0';
      const variable = block.getFieldValue('VAR') || 'filtered';
      
      const filterMap = {
        GT: `${array}.filter(item => Number(item) > Number(${value}))`,
        GTE: `${array}.filter(item => Number(item) >= Number(${value}))`,
        LT: `${array}.filter(item => Number(item) < Number(${value}))`,
        LTE: `${array}.filter(item => Number(item) <= Number(${value}))`,
        EQ: `${array}.filter(item => item == ${value})`,
        NEQ: `${array}.filter(item => item != ${value})`,
        CONTAINS: `${array}.filter(item => String(item).includes(String(${value})))`
      };
      
      const filterCode = filterMap[op] || array;
      return `${variable} = ${filterCode};\n` +
             `console.log("🔍 Filtered dataset: " + JSON.stringify(${variable}));\n`;
    };

    // Calculate Statistics
    Blockly.JavaScript['data_statistics'] = (block) => {
      const array = Blockly.JavaScript.valueToCode(block, 'ARRAY', ORDER_MEMBER) || '[]';
      const stat = block.getFieldValue('STAT');
      const variable = block.getFieldValue('VAR') || 'stat';
      
      const statMap = {
        SUM: `${array}.reduce((sum, val) => sum + Number(val || 0), 0)`,
        AVG: `(${array}.reduce((sum, val) => sum + Number(val || 0), 0) / ${array}.length)`,
        MAX: `Math.max(...${array}.map(val => Number(val || -Infinity)))`,
        MIN: `Math.min(...${array}.map(val => Number(val || Infinity)))`,
        COUNT: `${array}.length`,
        RANGE: `Math.max(...${array}.map(val => Number(val || -Infinity))) - Math.min(...${array}.map(val => Number(val || Infinity)))`
      };
      
      const statCode = statMap[stat] || '0';
      return `${variable} = ${statCode};\n` +
             `console.log("📊 ${stat}: " + ${variable});\n`;
    };

    // Generate Report
    Blockly.JavaScript['data_report'] = (block) => {
      const title = Blockly.JavaScript.valueToCode(block, 'TITLE', ORDER_NONE) || '"Report"';
      const data = Blockly.JavaScript.valueToCode(block, 'DATA', ORDER_NONE) || 'null';
      const format = block.getFieldValue('FORMAT');
      
      const reportMap = {
        TEXT: `console.log("\\n" + "=".repeat(50) + "\\n📋 REPORT: " + ${title} + "\\n" + "=".repeat(50) + "\\nData: " + JSON.stringify(${data}) + "\\n" + "=".repeat(50));`,
        JSON: `console.log("\\n" + JSON.stringify({title: ${title}, data: ${data}, timestamp: new Date().toISOString()}, null, 2));`,
        TABLE: `if (Array.isArray(${data})) { console.log("\\n📋 " + ${title} + "\\n" + ${data}.map((item, i) => (i+1) + ". " + JSON.stringify(item)).join("\\n")); } else { console.log("\\n📋 " + ${title} + "\\n" + JSON.stringify(${data}, null, 2)); }`,
        DETAILED: `const reportData = ${data}; console.log("\\n" + "=".repeat(60) + "\\n📋 DETAILED REPORT: " + ${title} + "\\n" + "=".repeat(60) + "\\nType: " + typeof reportData + "\\nValue: " + JSON.stringify(reportData, null, 2) + "\\nLength: " + (Array.isArray(reportData) ? reportData.length : "N/A") + "\\n" + "=".repeat(60));`
      };
      
      const reportCode = reportMap[format] || `console.log("📋 Report: " + ${title} + " - " + JSON.stringify(${data}));`;
      return `${reportCode}\n`;
    };

    // Find Pattern
    Blockly.JavaScript['data_find_pattern'] = (block) => {
      const data = Blockly.JavaScript.valueToCode(block, 'DATA', ORDER_MEMBER) || 'null';
      const pattern = Blockly.JavaScript.valueToCode(block, 'PATTERN', ORDER_NONE) || '""';
      const variable = block.getFieldValue('VAR') || 'matches';
      
      return `${variable} = Array.isArray(${data}) ? ${data}.filter(item => String(item).includes(String(${pattern}))) : (String(${data}).includes(String(${pattern})) ? [${data}] : []);\n` +
             `console.log("🔎 Found " + ${variable}.length + " match(es) for pattern: " + ${pattern});\n`;
    };

    // Sort Dataset
    Blockly.JavaScript['data_sort'] = (block) => {
      const array = Blockly.JavaScript.valueToCode(block, 'ARRAY', ORDER_MEMBER) || '[]';
      const order = block.getFieldValue('ORDER');
      const variable = block.getFieldValue('VAR') || 'sorted';
      
      const sortCode = order === 'ASC'
        ? `${array}.slice().sort((a, b) => { const aNum = Number(a), bNum = Number(b); if (!isNaN(aNum) && !isNaN(bNum)) return aNum - bNum; return String(a).localeCompare(String(b)); })`
        : `${array}.slice().sort((a, b) => { const aNum = Number(a), bNum = Number(b); if (!isNaN(aNum) && !isNaN(bNum)) return bNum - aNum; return String(b).localeCompare(String(a)); })`;
      
      return `${variable} = ${sortCode};\n` +
             `console.log("🔢 Sorted dataset (${order}): " + JSON.stringify(${variable}));\n`;
    };

    // Supporting blocks
    Blockly.JavaScript['number'] = (block) => {
      const num = block.getFieldValue('NUM');
      return [num, ORDER_ATOMIC];
    };

    Blockly.JavaScript['text'] = (block) => {
      const text = block.getFieldValue('TEXT');
      const escaped = text.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      return [`"${escaped}"`, ORDER_ATOMIC];
    };

    Blockly.JavaScript['array_create'] = () => ['[]', ORDER_ATOMIC];

    Blockly.JavaScript['variable_get'] = (block) => {
      const variable = block.getFieldValue('VAR');
      return [variable, ORDER_ATOMIC];
    };
  }
};

// ============================================================================
// MODULE: Workspace Configuration
// ============================================================================

const WorkspaceConfig = {
  /**
   * Get toolbox XML configuration
   */
  getToolbox() {
    return `
<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
  <category name="🔧 Data Processing" colour="20">
    <block type="data_init"></block>
    <block type="data_input"></block>
    <block type="data_transform"></block>
    <block type="data_filter"></block>
    <block type="data_statistics"></block>
    <block type="data_sort"></block>
    <block type="data_find_pattern"></block>
    <block type="data_report"></block>
  </category>
  <category name="📊 Values" colour="230">
    <block type="number"></block>
    <block type="text"></block>
    <block type="array_create"></block>
    <block type="variable_get"></block>
  </category>
</xml>`;
  },

  /**
   * Get workspace options
   */
  getOptions() {
    return {
      toolbox: this.getToolbox(),
      collapse: true,
      comments: true,
      disable: false,
      maxBlocks: Infinity,
      trashcan: true,
      horizontalLayout: false,
      toolboxPosition: 'start',
      css: true,
      media: 'https://unpkg.com/blockly@10.0.0/media/',
      rtl: false,
      scrollbars: true,
      sounds: true,
      oneBasedIndex: true,
      grid: {
        spacing: 20,
        length: 3,
        colour: '#ccc',
        snap: true
      },
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2
      }
    };
  },

  /**
   * Get default start block XML
   */
  getDefaultBlock() {
    return '<xml xmlns="https://developers.google.com/blockly/xml"><block type="data_init" id="start" x="50" y="50"></block></xml>';
  }
};

// ============================================================================
// MODULE: Error Handling
// ============================================================================

const ErrorHandler = {
  /**
   * Get user-friendly error messages
   */
  getFriendlyMessage(error) {
    const errorMsg = error.message.toLowerCase();
    
    const errorMap = {
      'undefined': 'A block is missing required connections. Please check that all inputs are properly connected.',
      'null': 'A block is missing required connections. Please check that all inputs are properly connected.',
      'type': 'Type mismatch detected. Please ensure blocks are connected to compatible inputs.',
      'check': 'Type mismatch detected. Please ensure blocks are connected to compatible inputs.',
      'syntax': 'Syntax error in generated code. Please check your block configuration.',
      'reference': 'A variable or function is referenced but not defined. Please check variable names.'
    };
    
    for (const [key, message] of Object.entries(errorMap)) {
      if (errorMsg.includes(key)) return message;
    }
    
    return 'An unexpected error occurred. Please try rearranging your blocks or refresh the page.';
  },

  /**
   * Get user-friendly execution error messages
   */
  getFriendlyExecutionError(error) {
    const errorMsg = error.message.toLowerCase();
    
    const errorMap = {
      'is not defined': 'A variable or function is being used but was not defined.\nPlease check that all variables are created before use.',
      'cannot read': 'A variable or function is being used but was not defined.\nPlease check that all variables are created before use.',
      'cannot read property': 'Trying to access a property of an undefined value.\nPlease ensure all data is properly initialized.',
      'undefined': 'Trying to access a property of an undefined value.\nPlease ensure all data is properly initialized.',
      'is not a function': 'Trying to call something that is not a function.\nPlease check your function names and syntax.',
      'syntax': 'Syntax error in the generated code.\nPlease check your block connections and configurations.',
      'type': 'Type error: incompatible data types.\nPlease ensure blocks are connected to compatible inputs.',
      'maximum call stack': 'Infinite loop or recursion detected.\nPlease check your loops and function calls.',
      'stack overflow': 'Infinite loop or recursion detected.\nPlease check your loops and function calls.'
    };
    
    for (const [key, message] of Object.entries(errorMap)) {
      if (errorMsg.includes(key)) return message;
    }
    
    return 'An error occurred during execution.\nPlease review your workflow and try again.';
  },

  /**
   * Show error message to user
   */
  show(message) {
    const executionOutput = document.getElementById('executionOutput');
    if (executionOutput) {
      executionOutput.textContent = `❌ ${message}`;
      executionOutput.className = 'execution-output error';
    }
  }
};

// ============================================================================
// MODULE: Code Execution
// ============================================================================

const CodeExecutor = {
  /**
   * Format output for display
   */
  formatOutput(arg) {
    if (arg === null) return 'null';
    if (arg === undefined) return 'undefined';
    if (typeof arg === 'object') {
      try {
        return JSON.stringify(arg, null, 2);
      } catch (e) {
        return String(arg);
      }
    }
    return String(arg);
  },

  /**
   * Execute generated code
   */
  execute(code) {
    const output = [];
    const originalLog = console.log;
    const originalError = console.error;
    const originalWarn = console.warn;
    
    // Capture console output
    console.log = (...args) => {
      output.push(args.map(arg => this.formatOutput(arg)).join(' '));
      originalLog.apply(console, args);
    };
    
    console.error = (...args) => {
      output.push(`❌ ERROR: ${args.map(arg => this.formatOutput(arg)).join(' ')}`);
      originalError.apply(console, args);
    };
    
    console.warn = (...args) => {
      output.push(`⚠️ WARNING: ${args.map(arg => this.formatOutput(arg)).join(' ')}`);
      originalWarn.apply(console, args);
    };
    
    try {
      const startTime = Date.now();
      const safeCode = `(function() { ${code} })();`;
      eval(safeCode);
      const executionTime = Date.now() - startTime;
      
      // Restore console functions
      console.log = originalLog;
      console.error = originalError;
      console.warn = originalWarn;
      
      return { success: true, output, executionTime };
    } catch (execError) {
      // Restore console functions
      console.log = originalLog;
      console.error = originalError;
      console.warn = originalWarn;
      
      return { success: false, error: execError };
    }
  }
};

// ============================================================================
// MODULE: Application Core
// ============================================================================

const App = {
  workspace: null,

  /**
   * Initialize the application
   */
  init() {
    // Register blocks and generators
    BlockDefinitions.register();
    CodeGenerators.register();
    
    // Create workspace
    this.workspace = Blockly.inject('blocklyDiv', WorkspaceConfig.getOptions());
    
    // Add default start block
    const defaultBlock = WorkspaceConfig.getDefaultBlock();
    Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(defaultBlock), this.workspace);
    
    // Setup event listeners
    this.setupEventListeners();
    
    // Initial code generation
    this.generateCode();
  },

  /**
   * Setup event listeners
   */
  setupEventListeners() {
    // Auto-generate code on workspace changes
    this.workspace.addChangeListener((event) => {
      if (event.type !== Blockly.Events.UI) {
        setTimeout(() => this.generateCode(), 100);
      }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const modKey = isMac ? e.metaKey : e.ctrlKey;
      
      if (modKey && e.key === 'g' && !e.shiftKey) {
        e.preventDefault();
        this.generateCode();
      } else if (modKey && e.key === 'r' && !e.shiftKey) {
        e.preventDefault();
        this.executeCode();
      } else if (modKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        this.clearWorkspace();
      }
    });
    
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (this.workspace) {
          Blockly.svgResize(this.workspace);
        }
      }, 250);
    });
  },

  /**
   * Generate JavaScript code from blocks
   */
  generateCode() {
    if (!this.workspace) {
      ErrorHandler.show('Workspace not initialized. Please refresh the page.');
      return;
    }
    
    try {
      const code = Blockly.JavaScript.workspaceToCode(this.workspace);
      const codeOutput = document.getElementById('codeOutput');
      
      if (!code || code.trim() === '') {
        codeOutput.textContent = '// No blocks to generate code from.\n// Drag blocks from the toolbox to start building your workflow.';
        codeOutput.style.color = '#888';
      } else {
        codeOutput.textContent = code;
        codeOutput.style.color = '#d4d4d4';
      }
    } catch (error) {
      const codeOutput = document.getElementById('codeOutput');
      const friendlyMessage = ErrorHandler.getFriendlyMessage(error);
      codeOutput.textContent = `// ❌ Error generating code\n// ${friendlyMessage}\n\n// Technical details: ${error.message}`;
      codeOutput.style.color = '#ff6b6b';
      console.error('Code generation error:', error);
    }
  },

  /**
   * Execute the generated code
   */
  executeCode() {
    if (!this.workspace) {
      ErrorHandler.show('Workspace not initialized. Please refresh the page.');
      return;
    }
    
    const executionOutput = document.getElementById('executionOutput');
    executionOutput.className = 'execution-output executing';
    executionOutput.textContent = '⏳ Executing code...';
    
    setTimeout(() => {
      try {
        const code = Blockly.JavaScript.workspaceToCode(this.workspace);
        
        if (!code || code.trim() === '') {
          executionOutput.textContent = '⚠️ No code to execute.\n\nPlease add some blocks from the toolbox and connect them together to create a workflow.';
          executionOutput.className = 'execution-output error';
          return;
        }
        
        const result = CodeExecutor.execute(code);
        
        if (result.success) {
          if (result.output.length > 0) {
            executionOutput.textContent = `${result.output.join('\n')}\n\n✓ Execution completed in ${result.executionTime}ms`;
            executionOutput.className = 'execution-output success';
          } else {
            executionOutput.textContent = `✓ Code executed successfully!\n\n(No output generated. Try adding blocks that print or display data.)\n\nExecution time: ${result.executionTime}ms`;
            executionOutput.className = 'execution-output success';
          }
        } else {
          const friendlyMessage = ErrorHandler.getFriendlyExecutionError(result.error);
          const errorDetails = result.error.stack 
            ? result.error.stack.split('\n').slice(0, 5).join('\n')
            : result.error.message;
          
          executionOutput.textContent = `❌ Execution Error\n\n${friendlyMessage}\n\nTechnical Details:\n${errorDetails}`;
          executionOutput.className = 'execution-output error';
          console.error('Execution error:', result.error);
        }
      } catch (error) {
        const friendlyMessage = ErrorHandler.getFriendlyMessage(error);
        executionOutput.textContent = `❌ Code Generation Error\n\n${friendlyMessage}\n\nTechnical Details: ${error.message}`;
        executionOutput.className = 'execution-output error';
        console.error('Code generation error:', error);
      }
    }, 50);
  },

  /**
   * Clear the workspace
   */
  clearWorkspace() {
    if (!this.workspace) {
      ErrorHandler.show('Workspace not initialized.');
      return;
    }
    
    const blockCount = this.workspace.getAllBlocks(false).length;
    
    if (blockCount === 0) return;
    
    if (confirm(`Are you sure you want to clear the workspace?\n\nThis will remove all ${blockCount} block(s) and cannot be undone.`)) {
      try {
        this.workspace.clear();
        
        const codeOutput = document.getElementById('codeOutput');
        const executionOutput = document.getElementById('executionOutput');
        
        codeOutput.textContent = '// Your generated code will appear here...\n// Drag blocks from the toolbox to start building.';
        codeOutput.style.color = '#888';
        
        executionOutput.textContent = '// Execution results will appear here...';
        executionOutput.className = 'execution-output';
        
        const defaultBlock = WorkspaceConfig.getDefaultBlock();
        Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(defaultBlock), this.workspace);
        
        this.generateCode();
        
        executionOutput.textContent = '✓ Workspace cleared successfully!';
        executionOutput.className = 'execution-output success';
        setTimeout(() => {
          executionOutput.textContent = '// Execution results will appear here...';
          executionOutput.className = 'execution-output';
        }, 2000);
      } catch (error) {
        ErrorHandler.show(`Error clearing workspace: ${error.message}`);
        console.error('Clear workspace error:', error);
      }
    }
  }
};

// ============================================================================
// MODULE: UI Helpers
// ============================================================================

const UI = {
  /**
   * Toggle sidebar on mobile
   */
  toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const toggle = document.getElementById('sidebarToggle');
    
    if (sidebar && toggle) {
      sidebar.classList.toggle('hidden');
      toggle.textContent = sidebar.classList.contains('hidden') ? '☰' : '✕';
    }
  }
};

// ============================================================================
// Global Functions (for HTML onclick handlers)
// ============================================================================

const generateCode = () => App.generateCode();
const executeCode = () => App.executeCode();
const clearWorkspace = () => App.clearWorkspace();
const toggleSidebar = () => UI.toggleSidebar();

// ============================================================================
// Initialize on page load
// ============================================================================

window.addEventListener('load', () => App.init());
