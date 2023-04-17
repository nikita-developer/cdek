<template>
  <AlertSuccess v-if="success">Заявка отправлена!</AlertSuccess>
  <form @submit.prevent="submit" class="form">
    <h1 class="mb-4">Анкета заключения договора для ИП</h1>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3">
        <label class="w-100">
          <span>ФИО (индивидуального предпринимателя):</span>
          <input v-model="fio" type="text" class="form-control mt-2" placeholder="Введите ФИО">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.fio"><small>{{errorsMessages.fio}}</small></p>
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
          <span>Юридический адрес:</span>
          <input v-model="yradres" type="text" class="form-control mt-2" placeholder="Введите адрес">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.yradres"><small>{{errorsMessages.yradres}}</small></p>
        </label>
        <div class="valid-feedback"></div>
      </div>
      <div class="mb-3 col-12 col-md-6 pl-md-3">
        <label class="w-100">
          <span>Фактический адрес:</span>
          <input v-model="faktadres" type="text" class="form-control mt-2" placeholder="Город, улица, дом/офис">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.faktadres"><small>{{errorsMessages.faktadres}}</small></p>
        </label>
      </div>
    </div>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3">
        <label class="w-100">
          <span>БИК банка:</span>
          <input v-model="bik" type="text" class="form-control mt-2" placeholder="Введите БИК">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.bik"><small>{{errorsMessages.bik}}</small></p>
        </label>
      </div>
      <div class="mb-3 col-12 col-md-6 pl-md-3">
        <label class="w-100">
          <span>Расчетный счет:</span>
          <input v-model="raschet" type="text" class="form-control mt-2" placeholder="Введите номер">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.raschet"><small>{{errorsMessages.raschet}}</small></p>
        </label>
      </div>
    </div>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3">
        <label class="w-100">
          <span>ФИО заполнителя анкеты:</span>
          <input v-model="thisfio" type="text" class="form-control mt-2" placeholder="Введите ФИО">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.thisfio"><small>{{errorsMessages.thisfio}}</small></p>
        </label>
      </div>
      <div class="mb-3 col-12 col-md-6 pl-md-3">
        <label class="w-100">
          <span>ФИО директора:</span>
          <input v-model="directorfio" type="text" class="form-control mt-2" placeholder="Введите ФИО">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.directorfio"><small>{{errorsMessages.directorfio}}</small></p>
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
          <span>Телефон:</span>
          <input v-model="phone" type="text" class="form-control mt-2" placeholder="Введите телефон">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.phone"><small>{{errorsMessages.phone}}</small></p>
        </label>
      </div>
    </div>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3">
        <label class="w-100">
          <span>Email:</span>
          <input v-model="email" type="text" class="form-control mt-2" placeholder="Введите email">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.email"><small>{{errorsMessages.email}}</small></p>
        </label>
      </div>
      <div class="mb-3 col-12 col-md-6 pl-md-3">
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
        </label>
      </div>
    </div>
    <input type="hidden" v-model="robots">
    <button class="btn btn-primary" type="submit">Отправить</button>
  </form>
</template>

<script setup>
  import {errorsForm} from "../../utils/form";
  const config = useRuntimeConfig();

  const fio = ref('')
  const inn = ref('')
  const yradres = ref('')
  const faktadres = ref('')
  const bik = ref('')
  const raschet = ref('')
  const thisfio = ref('')
  const directorfio = ref('')
  const osnovaniya = ref('')
  const phone = ref('')
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
        fio: unref(fio),
        inn: unref(inn),
        yradres: unref(yradres),
        faktadres: unref(faktadres),
        bik: unref(bik),
        raschet: unref(raschet),
        thisfio: unref(thisfio),
        directorfio: unref(directorfio),
        osnovaniya: unref(osnovaniya),
        phone: unref(phone),
        email: unref(email),
        site: unref(site),
        comment: unref(comment),
        robots: unref(robots),
      })
    }
    try {
      const fetchResponse = await fetch(`${config.API_URL}api/dogovors/ip`, settings)
      const data = await fetchResponse.json();
      if(fetchResponse.status === 200) {
        errorsMessages.value = {}
        fio.value = ''
        inn.value = ''
        yradres.value = ''
        faktadres.value = ''
        bik.value = ''
        raschet.value = ''
        thisfio.value = ''
        directorfio.value = ''
        osnovaniya.value = ''
        phone.value = ''
        email.value = ''
        site.value = ''
        comment.value = ''
        robots.value = ''

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
