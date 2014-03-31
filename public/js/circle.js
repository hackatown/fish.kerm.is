(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.circle = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.CIRCLE_ANIM();
	this.instance.setTransform(275.5,140.5,1,1,0,0,0,62,62);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(213.5,78.5,124,124);


// symbols:
(lib.CIRCLE_ANIM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJsAAQAAEBi2C1Qi1C2kBAAQj/AAi2i2Qi2i1AAkBQAAj/C2i2QC2i2D/AAQEBAAC1C2QC2C2AAD/IAAAA").cp();
	this.shape.setTransform(62,62);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0F8FB").s().p("AprAAQAAj/C2i2QC2i2D/AAQEBAAC1C2QC2C2AAD/QAAEBi2C1Qi1C2kBAAQj/AAi2i2Qi2i1AAkB").cp();
	this.shape_1.setTransform(62,62);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2F0F8").s().p("AprAAQAAj/C2i2QC2i2D/AAQEBAAC1C2QC2C2AAD/QAAEBi2C1Qi1C2kBAAQj/AAi2i2Qi2i1AAkB").cp();
	this.shape_2.setTransform(62,62);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D3E9F4").s().p("AprAAQAAj/C2i2QC2i2D/AAQEBAAC1C2QC2C2AAD/QAAEBi2C1Qi1C2kBAAQj/AAi2i2Qi2i1AAkB").cp();
	this.shape_3.setTransform(62,62);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C5E2F0").s().p("AprAAQAAj/C2i2QC2i2D/AAQEBAAC1C2QC2C2AAD/QAAEBi2C1Qi1C2kBAAQj/AAi2i2Qi2i1AAkB").cp();
	this.shape_4.setTransform(62,62);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B6DBED").s().p("AprAAQAAj/C2i2QC2i2D/AAQEBAAC1C2QC2C2AAD/QAAEBi2C1Qi1C2kBAAQj/AAi2i2Qi2i1AAkB").cp();
	this.shape_5.setTransform(62,62);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A8D3E9").s().p("AprAAQAAj/C2i2QC2i2D/AAQEBAAC1C2QC2C2AAD/QAAEBi2C1Qi1C2kBAAQj/AAi2i2Qi2i1AAkB").cp();
	this.shape_6.setTransform(62,62);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#99CCE6").s().p("AprAAQAAj/C2i2QC2i2D/AAQEBAAC1C2QC2C2AAD/QAAEBi2C1Qi1C2kBAAQj/AAi2i2Qi2i1AAkB").cp();
	this.shape_7.setTransform(62,62);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8AC5E2").s().p("AprAAQAAj/C2i2QC2i2D/AAQEBAAC1C2QC2C2AAD/QAAEBi2C1Qi1C2kBAAQj/AAi2i2Qi2i1AAkB").cp();
	this.shape_8.setTransform(62,62);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7CBDDE").s().p("AprAAQAAj/C2i2QC2i2D/AAQEBAAC1C2QC2C2AAD/QAAEBi2C1Qi1C2kBAAQj/AAi2i2Qi2i1AAkB").cp();
	this.shape_9.setTransform(62,62);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6DB6DB").s().p("AprAAQAAj/C2i2QC2i2D/AAQEBAAC1C2QC2C2AAD/QAAEBi2C1Qi1C2kBAAQj/AAi2i2Qi2i1AAkB").cp();
	this.shape_10.setTransform(62,62);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5FAFD7").s().p("AprAAQAAj/C2i2QC2i2D/AAQEBAAC1C2QC2C2AAD/QAAEBi2C1Qi1C2kBAAQj/AAi2i2Qi2i1AAkB").cp();
	this.shape_11.setTransform(62,62);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#50A8D3").s().p("AprAAQAAj/C2i2QC2i2D/AAQEBAAC1C2QC2C2AAD/QAAEBi2C1Qi1C2kBAAQj/AAi2i2Qi2i1AAkB").cp();
	this.shape_12.setTransform(62,62);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#42A0D0").s().p("AprAAQAAj/C2i2QC2i2D/AAQEBAAC1C2QC2C2AAD/QAAEBi2C1Qi1C2kBAAQj/AAi2i2Qi2i1AAkB").cp();
	this.shape_13.setTransform(62,62);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3399CC").s().p("AJsAAQAAEBi2C1Qi1C2kBAAQj/AAi2i2Qi2i1AAkBQAAj/C2i2QC2i2D/AAQEBAAC1C2QC2C2AAD/IAAAA").cp();
	this.shape_14.setTransform(62,62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124,124);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;