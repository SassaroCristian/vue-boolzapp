const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      contacts: [
        {
            name: 'Michele',
            avatar: './img/avatar_1.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020',
                    hour:'15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 ',
                    hour:'15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 ',
                    hour:'16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Fabio',
            avatar: './img/avatar_2.jpg',
            visible: true,
            messages: [
                {
                    date: '20/03/2020 ',
                    hour:'16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 ',
                    hour:'16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 ',
                    hour:'16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Samuele',
            avatar: './img/avatar_3.jpg',
            visible: true,
            messages: [
                {
                    date: '28/03/2020 ',
                    hour:'10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020',
                    hour:' 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 ',
                    hour:'16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Alessandro B.',
            avatar: './img/avatar_4.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020',
                    hour:'15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 ',
                    hour:'15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Alessandro L.',
            avatar: './img/avatar_5.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 ',
                    hour:'15:30:55',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 ',
                    hour:'15:50:00',
                    message: 'Va bene, stasera la sento',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Claudia',
            avatar: './img/avatar_6.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 ',
                    hour:'15:30:55',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 ',
                    hour:'15:50:00',
                    message: 'Non ancora',
                    status: 'received'
                },
                {
                    date: '10/01/2020',
                    hour:'15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Federico',
            avatar: './img/avatar_7.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020',
                    hour:'15:30:55',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020',
                    hour:'15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Davide',
            avatar: './img/avatar_8.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020',
                    hour:'15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:50:00',
                    hour:'15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020',
                    hour:'15:51:00',
                    message: 'OK!!',
                    status: 'received'
                }
            ],
        }
      ],
      activeContact: null, // Contatto attualmente attivo
      searchText: '', // Testo utilizzato per la ricerca dei contatti
    };
  },
  mounted() {
    // Imposta il contatto attivo come il primo contatto nell'array dei contatti
    this.activeContact = this.contacts[0];
  },
  methods: {
    // Metodo per cercare contatti in base al testo di ricerca
    searchContacts() {
      const searchTerm = this.searchText.toLowerCase();
      this.contacts.forEach(contact => {
        contact.visible = contact.name.toLowerCase().includes(searchTerm);
      });
    },

    // Metodo per ottenere l'ultimo messaggio di un contatto
    getLastMessage(messages) {
      return messages && messages.length > 0
        ? messages[messages.length - 1].message
        : null;
    },

    // Metodo per ottenere la data dell'ultimo messaggio di un contatto
    getLastMessageDate(messages) {
      return messages && messages.length > 0
        ? messages[messages.length - 1].date
        : null;
    },

    // Metodo per impostare il contatto attivo
    setActiveContact(contact) {
      this.activeContact = contact;
    },

    // Metodo per inviare un messaggio
    sendMessage() {
      const inputElement = document.getElementById('chat');
      const messageText = inputElement.value.trim();

      if (messageText !== '') {
        const currentDate = new Date();
        const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
        const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;

        // Crea un nuovo messaggio di tipo 'sent'
        const newMessage = {
          date: formattedDate,
          hour: formattedTime,
          message: messageText,
          status: 'sent',
        };

        this.activeContact.messages.push(newMessage);
        inputElement.value = '';

        // Simula una risposta dopo un secondo
        setTimeout(() => {
          const responseMessage = {
            date: formattedDate,
            hour: formattedTime,
            message: 'I am the globglobglabglab',
            status: 'received',
          };
          this.activeContact.messages.push(responseMessage);
        }, 1000);
      }
    },

    // Metodo per cancellare un messaggio
    deleteMessage() {
      const index = this.$parent.activeContact.messages.indexOf(this.message);
      if (index !== -1) {
        this.$parent.activeContact.messages.splice(index, 1);
      }
    },
  },
  computed: {
    // Ottieni i messaggi del contatto attivo
    activeContactMessages() {
      return this.activeContact ? this.activeContact.messages : [];
    },
  },
});

// Componente Vue per rappresentare un messaggio
app.component('chat-message', {
  props: {
    message: Object,
  },
  template: `
    <div :class="{ 'user-sent-message': message.status === 'sent', 'user-received-message': message.status === 'received' }">
      <p>{{ message.message }}</p>
      <p class="text-xs">{{ message.hour }}</p>
    </div>
  `,
});

// Monta l'app Vue all'elemento con id 'app' nel documento HTML
app.mount('#app');
