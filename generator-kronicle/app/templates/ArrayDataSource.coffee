class ArrayDataSource
    constructor: (@data = []) ->
        return @
    login: (user, pass, cb) =>
        return @
    create: (item, cb)  =>
        @data.push(item)
        if cb?
            cb()
        return @
    update: (item, cb) =>
        index = @_find(item)
        if index is not -1
            return @data[index] = item
        return false
    remove: (item, cb) =>
        index = @_find(item)
        if index is not -1
            return @data.splice(index, 1)
        return false
    get: (item, cb) =>
        index = @_find(item)
        if item and index is not -1
            return @data[index]
        else if !item
            return @data
        return false
    _find: (item) =>
        for index, dataItem in @data
            if dataItem.id is item
                return index
        return -1
    
window.ArrayDataSource = ArrayDataSource
    