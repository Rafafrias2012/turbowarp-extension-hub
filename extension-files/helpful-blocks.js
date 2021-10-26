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
        }
      ]
    }
  };
  isalwaystrue(){return true};
  isalwaysfalse(){return false};
  xorgate(args) {return (((args.ONE || args.TWO) && (!(args.ONE && args.TWO))))};
}
Scratch.extensions.register(new helpfulBlocks());
