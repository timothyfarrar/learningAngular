var doAsyncTask = function (cb) {
    setTimeout(function () {
        console.log("Async task calling callback");
        cb();
    }, 1000);
};
doAsyncTask(function () { return console.log("callback function called now"); });
