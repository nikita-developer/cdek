<template>
  <AlertSuccess v-if="success">Заявка отправлена!</AlertSuccess>
  <form @submit.prevent="submit" class="form">
    <h1 class="mb-4">Анкета заключения договора для cамозанятыx</h1>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3">
        <label class="w-100">
          <span>ФИО:</span>
          <input v-model="fio" type="text" class="form-control mt-2" placeholder="Введите ФИО">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.fio"><small>{{errorsMessages.fio}}</small></p>
        </label>
        <div class="valid-feedback"></div>
      </div>
      <div class="mb-3 col-12 col-md-6 pl-md-3">
        <label class="w-100">
          <span>ИНН:</span>
          <input v-model="inn" type="text" class="form-control mt-2" placeholder="Введите номер">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.inn"><small>{{errorsMessages.inn}}</small></p>
        </label>
        <div class="valid-feedback"></div>
      </div>
    </div>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3">
        <label class="w-100">
          <span>Дата рождения:</span>
          <input v-model="birth" type="text" class="form-control mt-2" placeholder="Введите дату">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.birth"><small>{{errorsMessages.birth}}</small></p>
        </label>
        <div class="valid-feedback"></div>
      </div>
      <div class="mb-3 col-12 col-md-6 pl-md-3">
        <label class="w-100">
          <span>Телефон:</span>
          <input v-model="phone" type="text" class="form-control mt-2" placeholder="Введите телефон">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.phone"><small>{{errorsMessages.phone}}</small></p>
        </label>
        <div class="valid-feedback"></div>
      </div>
    </div>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3">
        <label class="w-100">
          <span>Email:</span>
          <input v-model="email" type="text" class="form-control mt-2" placeholder="Введите email">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.email"><small>{{errorsMessages.email}}</small></p>
        </label>
        <div class="valid-feedback"></div>
      </div>
      <div class="mb-3 col-12 col-md-6 pl-md-3">
        <label class="w-100">
          <span>Серия и номер паспорта:</span>
          <input v-model="passnumber" type="text" class="form-control mt-2" placeholder="Введите серию и номер паспорта">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.passnumber"><small>{{errorsMessages.passnumber}}</small></p>
        </label>
        <div class="valid-feedback"></div>
      </div>
    </div>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3">
        <label class="w-100">
          <span>Дата выдачи паспорта:</span>
          <input v-model="passdata" type="text" class="form-control mt-2" placeholder="Введите дату">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.passdata"><small>{{errorsMessages.passdata}}</small></p>
        </label>
        <div class="valid-feedback"></div>
      </div>
      <div class="mb-3 col-12 col-md-6 pl-md-3">
        <label class="w-100">
          <span>Кем выдан паспорт:</span>
          <input v-model="passwho" type="text" class="form-control mt-2" placeholder="...">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.passwho"><small>{{errorsMessages.passwho}}</small></p>
        </label>
        <div class="valid-feedback"></div>
      </div>
    </div>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3">
        <label class="w-100">
          <span>Адрес регистрации:</span>
          <input v-model="adres" type="text" class="form-control mt-2" placeholder="Укажите индекс, город, улицу, дом">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.adres"><small>{{errorsMessages.adres}}</small></p>
        </label>
        <div class="valid-feedback"></div>
      </div>
      <div class="mb-3 col-12 col-md-6 pl-md-3">
        <label class="w-100">
          <span>Сайт (не обязательно):</span>
          <input v-model="site" type="text" class="form-control mt-2" placeholder="Введите ссылку на ваш сайт">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.site"><small>{{errorsMessages.site}}</small></p>
        </label>
        <div class="valid-feedback"></div>
      </div>
    </div>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3">
        <label class="w-100">
          <span>Название банка:</span>
          <input v-model="bank" type="text" class="form-control mt-2" placeholder="Введите название">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.bank"><small>{{errorsMessages.bank}}</small></p>
        </label>
        <div class="valid-feedback"></div>
      </div>
      <div class="mb-3 col-12 col-md-6 pl-md-3">
        <label class="w-100">
          <span>Номер счета:</span>
          <input v-model="numberschet" type="text" class="form-control mt-2" placeholder="Введите номер счета">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.numberschet"><small>{{errorsMessages.numberschet}}</small></p>
        </label>
        <div class="valid-feedback"></div>
      </div>
    </div>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3">
        <label class="w-100">
          <span>Кор. счет:</span>
          <input v-model="korschet" type="text" class="form-control mt-2" placeholder="Введите кор. счет">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.korschet"><small>{{errorsMessages.korschet}}</small></p>
        </label>
        <div class="valid-feedback"></div>
      </div>
      <div class="mb-3 col-12 col-md-6 pl-md-3">
        <label class="w-100">
          <span>БИК банка:</span>
          <input v-model="bik" type="text" class="form-control mt-2" placeholder="Введите БИК">
          <p class="form__message text-danger mb-0" v-if="errorsMessages.bik"><small>{{errorsMessages.bik}}</small></p>
        </label>
        <div class="valid-feedback"></div>
      </div>
    </div>
    <div class="form-row">
      <div class="mb-3 col-12">
        <label class="w-100">
          <span>Комментарий (не обязательно)</span>
          <textarea v-model="comment" class="form-control mt-2" placeholder="Введите текст..." rows="3"></textarea>
        </label>
        <div class="valid-feedback"></div>
      </div>
    </div>
    <button class="btn btn-primary" type="submit">Отправить</button>
  </form>
</template>

<script setup>
  import {errorsForm} from "../../utils/form";

  const fio = ref('')
  const inn = ref('')
  const birth = ref('')
  const phone = ref('')
  const email = ref('')
  const passnumber = ref('')
  const passdata = ref('')
  const passwho = ref('')
  const adres = ref('')
  const site = ref('')
  const bank = ref('')
  const numberschet = ref('')
  const korschet = ref('')
  const bik = ref('')
  const comment = ref('')

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
        birth: unref(birth),
        phone: unref(phone),
        email: unref(email),
        passnumber: unref(passnumber),
        passdata: unref(passdata),
        passwho: unref(passwho),
        adres: unref(adres),
        site: unref(site),
        bank: unref(bank),
        numberschet: unref(numberschet),
        korschet: unref(korschet),
        bik: unref(bik),
        comment: unref(comment),
      })
    }
    try {
      const fetchResponse = await fetch('http://localhost:5000/api/dogovors/employed', settings)
      const data = await fetchResponse.json();
      if(fetchResponse.status === 200) {
        errorsMessages.value = {}
        fio.value = ''
        inn.value = ''
        birth.value = ''
        phone.value = ''
        email.value = ''
        passnumber.value = ''
        passdata.value = ''
        passwho.value = ''
        adres.value = ''
        site.value = ''
        bank.value = ''
        numberschet.value = ''
        korschet.value = ''
        bik.value = ''
        comment.value = ''

        success.value = true
        setTimeout(() => {
          success.value = false
        }, 3000)
        console.log(1111)
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
