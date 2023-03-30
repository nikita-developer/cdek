<template>
  <form @submit.prevent="submit" class="col-12">
    <h1 class="mb-4">Анкета заключения договора для cамозанятыx</h1>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3 d-flex align-items-end">
        <label class="w-100">
          <span>ФИО:</span>
          <input v-model="fio" type="text" class="form-control mt-2" placeholder="Введите ФИО">
        </label>
        <div class="valid-feedback"></div>
      </div>
      <div class="mb-3 col-12 col-md-6 pl-md-3 d-flex align-items-end">
        <label class="w-100">
          <span>ИНН:</span>
          <input v-model="inn" type="text" class="form-control mt-2" placeholder="Введите номер">
        </label>
        <div class="valid-feedback"></div>
      </div>
    </div>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3 d-flex align-items-end">
        <label class="w-100">
          <span>Дата рождения:</span>
          <input v-model="birth" type="text" class="form-control mt-2" placeholder="Введите дату">
        </label>
        <div class="valid-feedback"></div>
      </div>
      <div class="mb-3 col-12 col-md-6 pl-md-3 d-flex align-items-end">
        <label class="w-100">
          <span>Телефон:</span>
          <input v-model="phone" type="text" class="form-control mt-2" placeholder="Введите телефон">
        </label>
        <div class="valid-feedback"></div>
      </div>
    </div>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3 d-flex align-items-end">
        <label class="w-100">
          <span>Email:</span>
          <input v-model="email" type="text" class="form-control mt-2" placeholder="Введите email">
        </label>
        <div class="valid-feedback"></div>
      </div>
      <div class="mb-3 col-12 col-md-6 pl-md-3 d-flex align-items-end">
        <label class="w-100">
          <span>Серия и номер паспорта:</span>
          <input v-model="passnumber" type="text" class="form-control mt-2" placeholder="Введите серию и номер паспорта">
        </label>
        <div class="valid-feedback"></div>
      </div>
    </div>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3 d-flex align-items-end">
        <label class="w-100">
          <span>Дата выдачи паспорта:</span>
          <input v-model="passdata" type="text" class="form-control mt-2" placeholder="Введите дату">
        </label>
        <div class="valid-feedback"></div>
      </div>
      <div class="mb-3 col-12 col-md-6 pl-md-3 d-flex align-items-end">
        <label class="w-100">
          <span>Кем выдан паспорт:</span>
          <input v-model="passwho" type="text" class="form-control mt-2" placeholder="...">
        </label>
        <div class="valid-feedback"></div>
      </div>
    </div>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3 d-flex align-items-end">
        <label class="w-100">
          <span>Адрес регистрации:</span>
          <input v-model="adres" type="text" class="form-control mt-2" placeholder="Укажите индекс, город, улицу, дом">
        </label>
        <div class="valid-feedback"></div>
      </div>
      <div class="mb-3 col-12 col-md-6 pl-md-3 d-flex align-items-end">
        <label class="w-100">
          <span>Сайт (не обязательно):</span>
          <input v-model="site" type="text" class="form-control mt-2" placeholder="Введите ссылку на ваш сайт">
        </label>
        <div class="valid-feedback"></div>
      </div>
    </div>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3 d-flex align-items-end">
        <label class="w-100">
          <span>Название банка:</span>
          <input v-model="bank" type="text" class="form-control mt-2" placeholder="Введите название">
        </label>
        <div class="valid-feedback"></div>
      </div>
      <div class="mb-3 col-12 col-md-6 pl-md-3 d-flex align-items-end">
        <label class="w-100">
          <span>Номер счета:</span>
          <input v-model="numberschet" type="text" class="form-control mt-2" placeholder="Введите номер счета">
        </label>
        <div class="valid-feedback"></div>
      </div>
    </div>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3 d-flex align-items-end">
        <label class="w-100">
          <span>Кор. счет:</span>
          <input v-model="korschet" type="text" class="form-control mt-2" placeholder="Введите кор. счет">
        </label>
        <div class="valid-feedback"></div>
      </div>
      <div class="mb-3 col-12 col-md-6 pl-md-3 d-flex align-items-end">
        <label class="w-100">
          <span>БИК банка:</span>
          <input v-model="bik" type="text" class="form-control mt-2" placeholder="Введите БИК">
        </label>
        <div class="valid-feedback"></div>
      </div>
    </div>
    <div class="form-row">
      <div class="mb-3 col-12 d-flex align-items-end">
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
      console.log(data)
    } catch (e) {
      return e
    }
  }
</script>

<style scoped>

</style>
