axios.defaults.baseURL = 'http://localhost:8580/';

var vm = new Vue({
    el: '#app',
    data: {
        users: [],
    },
    created: function () {
        this.fetch_all_user();
    },
    methods: {
        fetch_all_user: function () {
            var vm = this;
            var tmpCondition = '?age=&end_dt=&pageCon=10&pageNum=1&start_dt=&tel=&userSortDirection=ASC&userSortItem=user_seq&user_id=&user_name=&view_cnt=';
            
            axios.get('v1/chunjae/user/selectUser/' + tmpCondition)
                .then(function (res) {
                    console.log("GET RES", res);
                    vm.users = res.data.data.rows;
                })
                .catch(function (err) {
                    console.log("GET ERR", err);
                })
        },
    },
})
