class helpfulBlocks {
  getInfo() {
    return {
      id: 'helpfulblocksthub',
      name: 'Helpful Blocks',
      blocks: [
        {
          opcode: 'isalwaystrue',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'true'
        },
        {
          opcode: 'isalwaysfalse',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'false'
        },
        {
          opcode: 'xorgate',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] xor [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.BOOLEAN
            },
            TWO: {
              type: Scratch.ArgumentType.BOOLEAN
            }
          }
        },
        {
          opcode: 'strictlyequal',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] === [TWO]',
          arguments: {
            ONE: {type: Scratch.ArgumentType.STRING},
            TWO: {type: Scratch.ArgumentType.STRING}
          }
        },
        {
          opcode: 'toBool',
          blockType: Scratch.BLockType.BOOLEAN,
          text: '[INPUT]',
          arguments: {
            INPUT: {type: Scratch.ArgumentType.STRING}
          }
        }
      ]
    }
  };
  isalwaystrue(){return true;};
  isalwaysfalse(){return false;};
  xorgate(args) {return (((args.ONE || args.TWO) && (!(args.ONE && args.TWO))));};
  strictlyequal(args) {return (args.ONE === args.TWO);};
  toBool(args) {
    if (args.INPUT) {
      return true;
    } else {
      return false;
    };
  };
}
Scratch.extensions.register(new helpfulBlocks());
