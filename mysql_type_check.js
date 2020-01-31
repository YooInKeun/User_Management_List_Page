axios.defaults.baseURL = 'http://localhost:8580/';

var vm = new Vue({
    el: '#app',
    data: {
        result: {}
     },
    created: function () {
        this.fetch_all_data();
    },
    methods: {
        fetch_all_data: function () {

            var json = {
                params: {
                    col_int: 152
                }
            };

            axios.get('/chunjae/typecheck/mysql', json)
                .then((res) => {
                    console.log("GET SUCESS", res);
                    result = JSON.parse(res.data.data);
                    console.log(result);

                    for (key in result) {
                        console.log('key : ' + key + ' / ' + 'type : ' + typeof(result[key]) + ' / ' + 'value:' + result[key]);
                    };
                })
                .catch((err) => {
                    console.log("GET FAIL", err);
                });
        },
    },
})
