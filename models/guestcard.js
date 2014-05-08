module.exports = function(gc) {
	gc = gc || {};
	gc.comments = gc.comments+"-------"+(new Date().getTime());
	return gc;
}