new Vue({
    el: '#app',

    data: {
        message: '',
        showCode: false,

        examples: [
            'Hi, good luck',
            'Hola, buena suerte',
            'Hello {opponent}, I wish you good fortune in the game to come',
            'May the light of a thousand stars shine upon you this game',
            'Nice mate 👏'
        ],
    },

    computed: {
        bookmarklet: function(){
            return `javascript:(function(){
    const input = document.querySelector('.mchat__say');
    const opponentName = document.querySelector('.ruser-top a').textContent;

    input.value = ${JSON.stringify(this.message)}.replace('{opponent}', opponentName);
    input.dispatchEvent(
        new KeyboardEvent('keypress', {
            'keyCode': 13,
            'which': 13
        })
    );
})()`
        },
        bookmarkletMinified: function(){
            return this.bookmarklet.replace(/\s+/g, ' ')
        },
    }
})
