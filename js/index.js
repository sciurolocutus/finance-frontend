var host = "http://localhost:5000";

Vue.component('app-nav', {
    props: {
        'views': Array
    },
    template: '<ul id="nav"><li v-for="view in views"><a :href="view.url">{{ view.name }}</a></li></ul>'
});

Vue.component('app-sidebar', {
    template: '<ul id="nav"><li v-for="view in views">{{ view }}</li></ul>'
});

Vue.component('app-content', {
    props: {

    },
    template: '<ul id="nav"><li v-for="view in views">{{ view }}</li></ul>'
});

Vue.component('transaction-list', {
    props: {

    },
    data: function() {
        return {
            transactions: fetch(host + "/transactions", { mode: 'cors' })
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    return data.transactions;
                })
        }
    },
    template: '<table><th>id</th><th>date</th><th>description</th><th>amount</th><th>category</th>' +
        '<tr v-for="transaction in transactions"><td>transaction.id</td><td>transaction.transactionDate</td><td>transaction.description</td>transaction.amount</td><td>transaction.categoryName</td></tr>' +
        '</table>'
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        categories: [{
                "id": 1,
                "name": "Tschotchkes",
                "monthlyBudget": "122.32"
            },
            {
                "id": 2,
                "name": "Books",
                "monthlyBudget": "20.01"
            }
        ]
    }
});