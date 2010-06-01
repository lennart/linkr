function(data) {
  return {
    items : data.rows.map(function(r) {
      return r.value;
    })
  }
};
