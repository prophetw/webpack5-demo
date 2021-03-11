class a {
  apply(compiler) {
    const prioritiseInitial = this.options.prioritiseInitial;
    compiler.hooks.compilation.tap(
      "OccurrenceOrderChunkIdsPlugin",
      (compilation) => {
        compilation.hooks.optimizeChunkOrder.tap(
          "OccurrenceOrderChunkIdsPlugin",
          (chunks) => {
            const occursInInitialChunksMap = new Map();
            const originalOrder = new Map();
            let i = 0;
            for (const c of chunks) {
              let occurs = 0;
              //得到chunk的chunkGroup
              for (const chunkGroup of c.groupsIterable) {
                //查看當前模塊有沒有被其它模塊引用
                for (const parent of chunkGroup.parentsIterable) {
                  //isInitial方法始終返回true
                  if (parent.isInitial()) occurs++;
                }
              }
              occursInInitialChunksMap.set(c, occurs);
              originalOrder.set(c, i++);
            }
            //排序
            chunks.sort((a, b) => {
              //如果規則是size，prioritiseInitial為true，通過父模塊的數量來排序。如果父模塊相同，則按照和total-size相同的規則排序。
              if (prioritiseInitial) {
                const aEntryOccurs = occursInInitialChunksMap.get(a);
                const bEntryOccurs = occursInInitialChunksMap.get(b);
                if (aEntryOccurs > bEntryOccurs) return -1;
                if (aEntryOccurs < bEntryOccurs) return 1;
              }
              //得到groups的大小，內部調用this._group.size
              const aOccurs = a.getNumberOfGroups();
              const bOccurs = b.getNumberOfGroups();
              if (aOccurs > bOccurs) return -1;
              if (aOccurs < bOccurs) return 1;
              //依據chunk在chunks中的索引位置排序
              const orgA = originalOrder.get(a);
              const orgB = originalOrder.get(b);
              return orgA - orgB;
            });
          }
        );
      }
    );
  }
}
