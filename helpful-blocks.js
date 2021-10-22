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
        }
      ]
    }
  };
  isalwaystrue() {
    return true
  };
}
Scratch.extensions.register(new helpfulBlocks());
