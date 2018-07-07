const weather_box = {
    delimiters: ["[[", "]]"],
    props: ['location'],
    template: 
    `<div>
    <div v-if="icon" class="box is-info">
            <article class="media">
                <div class="media-left">
                    <figure class="image is-50x50">
                        <img :src="[[ icon ]]" />
                    </figure>
                </div>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <span class="title">[[ locationName ]]</span>
                            <span class="country">[[ country ]]</span>
                            <br>
                            <span class="subtitle">[[ temp ]]&deg C</span>
                            <br>
                            <span class="description">[[ desc ]]</span>
                        </p>
                    </div>
                </div>
                <div class="media-right">
                    <button class="delete" v-on:click="$emit(\'remove\')"></button>
                </div>
            </article>
        </div>
        <br>
        </div>`,
    
    data (){
        return{
            icon: '',
            locationName: '',
            temp: '',
            desc: '',
            country: '',
        }
    },
    computed: {

    },

    created() {
        var myUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + this.location.name + "&units=metric&APPID=65af4edbe637c0498a4e3774dc356fc1"
        var myData = axios.get(myUrl).catch(response => this.$emit("errored", this.location.name));
        myData.then(response => this.icon = "http://openweathermap.org/img/w/" + response.data.weather[0]["icon"] + ".png").catch(response => console.log(response));
        myData.then(response => this.locationName = response.data.name).catch(response => console.log(response));
        myData.then(response => this.temp = Math.round(response.data.main.temp)).catch(response => console.log(response));
        myData.then(response => this.desc = response.data.weather[0]["description"]).catch(response => console.log(response));
        myData.then(response => this.country = response.data.sys.country).catch(response => console.log(response));
        myData.then(response => console.log(response.data)).catch(response => console.log(response));

    },
    methods:
    {
        removeEvent: function(){
            this.$emit('remove-event', this.removeWeatherComp);
        }
    }
            
}

var app = new Vue(
    {
        delimiters: ["[[", "]]"],
        el: "#app",
        components: {
            "weather-box" : weather_box,
        },
        data(){
            return {
                locations: [],
                city: '',
                nextid: 0,
                errorMessage: ''
            }
        },
        methods: {

            addWeatherComp : function(){
                if (this.city)
                {
                    this.locations.push({
                        id: this.nextid,
                        name: this.city
                    });
                    this.city = '';
                    this.nextid += 1
                }
            },
            removeWeatherComp : function(id){
                this.locations.splice(id,1);
            },
            sayError: function(msg){
                this.errorMessage = msg;
            },
            clearError: function(msg){
                this.errorMessage = '';
            }
        }
        
    }
)



