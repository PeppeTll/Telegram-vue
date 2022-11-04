const app = new Vue({
    el: '#app',
    data: {
        contatti: [
            {
                nome: 'Patatona',
                avatar: 'https://picsum.photos/id/152/200/300',
                visibile: true,
                messaggi: [
                    {
                        data: '03/11/2022  16:45',
                        testo: 'example',
                        stato: 'ricevuto'
                    },
                    {
                        data: '03/11/2022  16:45',
                        testo: 'example',
                        stato: 'ricevuto'
                    },
                    {
                        data: '03/11/2022  16:45',
                        testo: 'example',
                        stato: 'ricevuto'
                    },
                    {
                        nome: 'tu',
                        data: '03/11/2022  16:45',
                        testo: 'example',
                        stato: 'inviato'
                    },
                ]
            },
            {
                nome: 'Gino',
                avatar: 'https://picsum.photos/id/31/200/300',
                visibile: true,
                messaggi: [
                    {
                        data: '03/11/2022  16:45',
                        testo: 'example',
                        stato: 'ricevuto'
                    }
                ]
            },
            {
                nome: 'Mbaruzzo',
                avatar: 'https://picsum.photos/id/58/200/300',
                visibile: true,
                messaggi: [
                    {
                        data: '03/11/2022  16:45',
                        testo: 'example',
                        stato: 'ricevuto'
                    }
                ]
            },
        ],
        index: 0,
        messaggio: '',
        search: '',
    },
    computed: {
        filtraContatti: function() {
            return this.contatti.filter( el => {
                return el.nome.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
    methods: {
        showChat: function( i ) {
            this.index = i
        },
        sendMessage: function(testo, index, nome) {
            const message = {
                nome: 'tu',
                data: '',
                testo: testo,
                stato: 'inviato'
                }
            this.contatti[index].messaggi.push(message)
            this.messaggio = ''
            setTimeout(() => {
                const newMessage = {
                    data: '',
                    testo: 'ok',
                    stato: 'ricevuto'
                }
                this.contatti[index].messaggi.push(newMessage)
            },2000)
        },
        console: function(contatto, i) {
            console.log(contatto, i)
        },
    },
})