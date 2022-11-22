<template>
    <div class="text-center">
      <v-dialog
        v-model = 'show'
        width="300"
      >
        <v-card>
          <v-card-title v-if = 'childData.adding' class="primary" style = "color:white;">
            <v-icon 
            style = "color:white;" 
            >
            mdi-plus-circle</v-icon>
            Add Task
          </v-card-title>
        <v-card-title v-else = 'childData.adding' class="primary" style = "color:white;">
            <v-icon 
            style = "color:white;" >
            mdi-square-edit-outline</v-icon>
            Edit Task
        </v-card-title>
          
          <v-container>
            <v-row no-gutters>
              <v-form
              ref="form"
              lazy-validation>
                <v-col cols = "12" sm = "6" md="12" v-if = 'childData.adding'>
                    <v-text-field 
                    :rules="[rules.required, rules.distinct, rules.length]"
                    label = "Title"
                    v-model = "childData.title" 
                    outlined>
                    </v-text-field>
                  </v-col>

                <v-col cols = "12" sm = "6" md="12" >
                    <v-text-field
                    label = "Description"
                    v-model = "childData.description" 
                    :rules="[rules.required]"
                    outlined></v-text-field>
                </v-col>

                <v-col cols = '12' sm ='2' md ="12">
                    <v-text-field 
                    label = "Deadline"
                    v-model= "childData.dead"
                    outlined 
                    :rules="[rules.required]"
                    type = "date"></v-text-field>
                    <p>Priority</p>
                    <v-radio-group 
                    v-model="childData.priority"
                    :rules="[rules.required]"
                    row>
                        <v-radio label="Low" value="Low"></v-radio>
                        <v-radio label="Med" value="Med"></v-radio>
                        <v-radio label="High" value="High"></v-radio>
                    </v-radio-group>
                </v-col>
              </v-form>
            </v-row>
          </v-container>

          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn 
            color="primary" 
            @click="validateAndAdd()" 
            v-if = 'childData.adding'>
                <v-icon>mdi-plus-circle</v-icon>
                Add
            </v-btn>
            <v-btn 
            color="primary" 
            @click="validateAndAdd()" 
            v-else = 'childData.adding'>
                <v-icon>mdi-square-edit-outline</v-icon>
                Edit
            </v-btn>
            <v-btn
              color="error"
              @click="$emit('newRow', -1)">
                Cancel
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  <script>
  import VueToastr from 'vue-toastr'
    export default {
    name : 'Dialog',
    created() {
    },
    props:  {
        title : String,
        rowList : Array,
        childData : Object,
        show : Boolean
    },
    methods: {
        validateAndAdd() {
            if (this.$refs.form.validate()) {
                this.changeRows()
            }
        },
        changeRows() {
            this.$refs.form.resetValidation()
            this.show = false
            this.$emit("newRow", this.childData)
        },
    },
      data () {
        return {
          show : false,
          rules: {
            required: value => !!value  || 'Required.',
            distinct: value => !this.childData.titles.includes(value) || 'Must be a distinct title',
            length: value => value.length < 30 || 'Value too long'
            },
        }
      },
    }
  </script>

<style>

</style>