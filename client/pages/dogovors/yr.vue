<template>
  <AlertSuccess v-if="success">Заявка отправлена!</AlertSuccess>
  <form @submit.prevent="submit" class="form">
    <h1 class="mb-4">Анкета заключения договора для Юр. лиц</h1>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3">
        <label class="w-100">
          <span>Наименование:</span>
          <input v-model="name" type="text" class="form-control mt-2" placeholder="Введите название">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.name"><small>{{errorsMessages.name}}</small></p>
        </label>
      </div>
      <div class="mb-3 col-12 col-md-6 pl-md-3">
        <label class="w-100">
          <span>ИНН:</span>
          <input v-model="inn" type="text" class="form-control mt-2" placeholder="Введите номер">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.inn"><small>{{errorsMessages.inn}}</small></p>
        </label>
      </div>
    </div>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3">
        <label class="w-100">
          <span>Фактический адрес:</span>
          <input v-model="faktadres" type="text" class="form-control mt-2" placeholder="Город, улица, дом/офис">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.faktadres"><small>{{errorsMessages.faktadres}}</small></p>
        </label>
      </div>
      <div class="mb-3 col-12 col-md-6 pl-md-3">
        <label class="w-100">
          <span>Номер свидетельства (не обязательно)</span>
          <input v-model="numbersvid" type="text" class="form-control mt-2" placeholder="Введите номер">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.numbersvid"><small>{{errorsMessages.numbersvid}}</small></p>
        </label>
      </div>
    </div>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3">
        <label class="w-100">
          <span>Дата выдачи свидетельства (не обязательно):</span>
          <input v-model="datasvid" type="text" class="form-control mt-2" placeholder="Введите дату">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.datasvid"><small>{{errorsMessages.datasvid}}</small></p>
        </label>
      </div>
      <div class="mb-3 col-12 col-md-6 pl-md-3">
        <label class="w-100">
          <span>БИК банка:</span>
          <input v-model="bik" type="text" class="form-control mt-2" placeholder="Введите БИК">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.bik"><small>{{errorsMessages.bik}}</small></p>
        </label>
      </div>
    </div>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3">
        <label class="w-100">
          <span>Расчетный счет:</span>
          <input v-model="raschet" type="text" class="form-control mt-2" placeholder="Введите номер">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.raschet"><small>{{errorsMessages.raschet}}</small></p>
        </label>
      </div>
      <div class="mb-3 col-12 col-md-6 pl-md-3">
        <label class="w-100">
          <span>ФИО заполнителя анкеты:</span>
          <input v-model="thisfio" type="text" class="form-control mt-2" placeholder="Введите ФИО">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.thisfio"><small>{{errorsMessages.thisfio}}</small></p>
        </label>
      </div>
    </div>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3">
        <label class="w-100">
          <span>ФИО директора:</span>
          <input v-model="directorfio" type="text" class="form-control mt-2" placeholder="Введите ФИО">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.directorfio"><small>{{errorsMessages.directorfio}}</small></p>
        </label>
      </div>
      <div class="mb-3 col-12 col-md-6 pl-md-3">
        <label class="w-100">
          <span>Телефон:</span>
          <input v-model="phone" type="text" class="form-control mt-2" placeholder="Введите телефон">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.phone"><small>{{errorsMessages.phone}}</small></p>
        </label>
      </div>
    </div>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3">
        <label class="w-100">
          <span>Основания действий директора:</span>
          <input v-model="osnovaniya" type="text" class="form-control mt-2" placeholder="...">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.osnovaniya"><small>{{errorsMessages.osnovaniya}}</small></p>
        </label>
      </div>
      <div class="mb-3 col-12 col-md-6 pl-md-3">
        <label class="w-100">
          <span>Email:</span>
          <input v-model="email" type="text" class="form-control mt-2" placeholder="Введите email">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.email"><small>{{errorsMessages.email}}</small></p>
        </label>
      </div>
    </div>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3">
        <label class="w-100">
          <span>Сайт (не обязательно)</span>
          <input v-model="site" type="text" class="form-control mt-2" placeholder="Введите ссылку на ваш сайт">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.site"><small>{{errorsMessages.site}}</small></p>
        </label>
      </div>
    </div>
    <div class="form-row">
      <div class="mb-3 col-12">
        <label class="w-100">
          <span>Комментарий (не обязательно)</span>
          <textarea v-model="comment" class="form-control mt-2" placeholder="Введите текст..." rows="3"></textarea>
          <p class="form__message text-danger mb-0" v-if="errorsMessages.comment"><small>{{errorsMessages.comment}}</small></p>
        </label>
      </div>
    </div>
    <button class="btn btn-primary" type="submit">Отправить</button>
  </form>
</template>

<script setup>
import {errorsForm} from "../../utils/form";
const config = useRuntimeConfig();

const name = ref('')
const inn = ref('')
const faktadres = ref('')
const numbersvid = ref('')
const datasvid = ref('')
const bik = ref('')
const raschet = ref('')
const thisfio = ref('')
const directorfio = ref('')
const phone = ref('')
const osnovaniya = ref('')
const email = ref('')
const site = ref('')
const comment = ref('')
const robots = ref('')

let errorsMessages = ref({})
let success = ref(false)

const submit = async () => {
  const settings = {
    method: 'POST',
    credentials: "include",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: unref(name),
      inn: unref(inn),
      faktadres: unref(faktadres),
      numbersvid: unref(numbersvid),
      datasvid: unref(datasvid),
      bik: unref(bik),
      raschet: unref(raschet),
      thisfio: unref(thisfio),
      directorfio: unref(directorfio),
      phone: unref(phone),
      osnovaniya: unref(osnovaniya),
      email: unref(email),
      site: unref(site),
      comment: unref(comment),
      robots: unref(robots),
    })
  }
  try {
    const fetchResponse = await fetch(`${config.API_URL}/dogovors/yr`, settings)
    const data = await fetchResponse.json();
    if(fetchResponse.status === 200) {
      errorsMessages.value = {}
      name.value = ''
      inn.value = ''
      faktadres.value = ''
      numbersvid.value = ''
      datasvid.value = ''
      bik.value = ''
      raschet.value = ''
      thisfio.value = ''
      directorfio.value = ''
      phone.value = ''
      osnovaniya.value = ''
      email.value = ''
      site.value = ''
      comment.value = ''

      success.value = true
      setTimeout(() => {
        success.value = false
      }, 3000)
      console.log(data)
    } else {
      errorsMessages.value = {}
      errorsMessages.value = errorsForm(data.errors)
    }
  } catch (e) {
    return e
  }
}
</script>

<style scoped>

</style>
