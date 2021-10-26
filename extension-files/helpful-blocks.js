class helpfulBlocks {
  getInfo() {
    return {
      id: 'helpfulblocksthub',
      name: 'Helpful Blocks',
      blocks: [
        {
          opcode: 'isalwaystrue',
          blocktype: Scratch.BlockType.BOOLEAN,
          text: 'true'
        },
        {
          opcode: 'isalwaysfalse',
          blocktype: Scratch.BlockType.BOOLEAN,
          text: 'false'
        },
        {
          opcode: 'xorgate',
          blocktype: Scratch.BlockType.BOOLEAN,
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
  xorgate(args) {return (((args.ONE || args.TWO) && (!(args.ONE && args.TWO))))
}
Scratch.extensions.register(new helpfulBlocks());
