function forEach(iterable, callback) {
  if (Array.isArray(iterable) || typeof iterable === 'object') {
    for (var keyOrIndex in iterable) {
      var item = iterable[keyOrIndex]
      callback(item, keyOrIndex, iterable)
    }
  }
}