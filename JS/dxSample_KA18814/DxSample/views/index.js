DxSample.Index = function (params) {
    var viewModel = {
        message: ko.observable('Hello World'),

        viewShown: function () {
            alert("View is rendered: " + this.message());
        },

        btn_Click: function () {
            alert(this.message());
        }
    };
    return viewModel;
};