function modifyArray ( dataArray, updateArray, mixedCallback ) {
    if ( updateArray && updateArray.constructor.name === 'Array' ) {
        if ( typeof mixedCallback === 'function' ) {
            dataArray.forEach(function ( item, itemIndex ) {
                var removeIndex = null;
                updateArray.forEach(function ( newItem, index ) {
                    if ( mixedCallback(item, newItem) ) {
                        removeIndex = index;
                    }
                });

                if ( removeIndex !== null ) {
                    dataArray[itemIndex] = updateArray[removeIndex];
                    updateArray.splice(removeIndex, 1);
                }
            });
        }

        dataArray = dataArray.concat(updateArray);
    } else {
        dataArray = dataArray.filter(mixedCallback);
    }

    return dataArray;
}
