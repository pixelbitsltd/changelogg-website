const formatDate = function (date, format = { year: 'numeric', month: 'long', day: 'numeric' }) {
  const d = new Date(date);
  return d.toLocaleDateString('en-us', format);
}

module.exports = {
  formatDate
};
