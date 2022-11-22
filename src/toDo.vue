<template>
<v-app style='margin:30px'>
    <v-card>
    <!--panel header-->
        <v-card-title class='headline primary' primary-title style='color: white; margin: auto;'>
            <v-spacer> <div class = "text-center">
                <v-icon style='color: white;'>mdi-view-headline</v-icon>
                FRAMEWORKS
            </div>
            </v-spacer>
            <div class = "text-right">
                <template>
                    <v-btn
                        color="primary"
                        dark
                        @click = "openNewDialog()"
                    >
                    <v-icon>mdi-plus</v-icon>
                        Add
                    </v-btn>
                </template>
                <Dialog :show = "show" :childData = "parentData" @newRow = "addRow($event)"></Dialog>
            </div>
        </v-card-title>
    <!--panel body-->
        <v-simple-table style='margin: 20px;'>
            <template >
            <!--table header-->
                <thead>
                <tr>
                    <th>
                        Title
                    </th>
                    <th>
                        Description
                    </th>
                    <th>
                        Deadline
                    </th>
                    <th>
                        Priority
                    </th>
                    <th>
                        Is Complete
                    </th>
                    <th>
                        Action
                    </th>
                </tr>
                </thead>
            <!--table body-->
                <tbody>
                    <tr v-for = '(a,ai) in rows' :key = "ai">
                        <td>{{a.title}}</td>
                        <td>{{a.description}}</td>
                        <td>{{formatDate(a.dead)}}</td>
                        <td>{{a.priority}}</td>
                        <td><input 
                            type = "checkbox" 
                            id = "checkbox"
                            label = "Is Complete"
                            :value = "a.title"
                            v-model = "completeRows"
                            ></td>
                        <td><v-row v-if = "!completeRows.includes(a.title)">
                            <v-btn
                            color = "primary"
                            dark
                            @click.native = "openOldDialog(a, ai)"
                            
                            >
                            <v-icon>mdi-square-edit-outline</v-icon>
                                Update
                            </v-btn>
                        </v-row>
                        <v-row>
                            <v-btn
                            color = "error"
                            dark
                            @click = "deleteRow(ai)"
                            >
                            <v-icon>mdi-close-circle</v-icon>
                                Delete
                            </v-btn>
                        </v-row>
                        </td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </v-card>
    </v-app>
</template>
<script>
//master
import Dialog from "./dialog.vue"
import moment from 'moment'
import VueToastr from 'vue-toastr'

    export default {
    //life cycles
        created(){},

    //components
    components : {
        Dialog, VueToastr
    },
    //methods
        methods: {
            addRow(newRow) {
                if (newRow != -1) {
                    if (this.currRow == -1) {
                        this.rows.push(newRow)
                        this.toast('Successfully added task!')
                    }
                    else {
                        this.rows[this.currRow] = newRow
                        this.toast("Successfully edited task!")
                    }
                }
                this.show = false
            },
            openNewDialog() {
                this.parentData = {
                    adding : true,
                    titles : this.rows.map(a => a.title),
                    title: "",
                    description : "",
                    dead : "",
                    priority : ""
                }
                this.show = true
                this.currRow = -1
            },
            openOldDialog(a, index) {
                this.parentData = {
                    adding : false,
                    titles : this.rows.map(a => a.title),
                    title: a.title,
                    description : a.description,
                    dead : a.dead,
                    priority : a.priority
                }
                this.show = true
                this.currRow = index
            },
            closeDialog() {
                this.show = false
            },
            deleteRow(i) {
                this.rows.splice(i, 1)
                this.completeRows.splice(i, 1)
                this.$toasted.show('Successfully deleted task!',  { 
                    theme: "outline", 
                    position: "bottom-right", 
                    duration : 5000
                })
            },
            formatDate(date) {
                if (date) {
                    return moment(date, "YYYY/MM/DD").format('MM/DD/YYYY')
                }
                else return ''
            },
            toast(str) {
                this.$toasted.show(str,  { 
                        theme: "outline", 
                        position: "bottom-right", 
                        duration : 5000
                        })
            }
        }, 
    //watchers
        watch: {},
    //computed
        computed: {},
    //global vars
          data: global => ({
            rows: [],
            currRow : -1,
            parentData: {
                titles : [],
                title: "",
                description: "",
                dead : "",
                priority : ""
            },
            show : false,
            completeRows : [],
        }),
    }
</script>