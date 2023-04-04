<template>
  <form class="form">
    <h1 class="mb-4">Анкета заключения договора для Юр. лиц</h1>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3 d-flex align-items-end">
        <label class="w-100">
          <span>Наименование:</span>
          <input type="text" class="form-control mt-2" placeholder="Введите название">
        </label>
        <div class="valid-feedback"></div>
      </div>
      <div class="mb-3 col-12 col-md-6 pl-md-3 d-flex align-items-end">
        <label class="w-100">
          <span>ИНН:</span>
          <input type="text" class="form-control mt-2" placeholder="Введите номер">
        </label>
        <div class="valid-feedback"></div>
      </div>
    </div>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3 d-flex align-items-end">
        <label class="w-100">
          <span>Фактический адрес:</span>
          <input type="text" class="form-control mt-2" placeholder="Город, улица, дом/офис">
        </label>
        <div class="valid-feedback"></div>
      </div>
      <div class="mb-3 col-12 col-md-6 pl-md-3 d-flex align-items-end">
        <label class="w-100">
          <span>Номер свидетельства (не обязательно)</span>
          <input type="text" class="form-control mt-2" placeholder="Введите номер">
        </label>
        <div class="valid-feedback"></div>
      </div>
    </div>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3 d-flex align-items-end">
        <label class="w-100">
          <span>Дата выдачи свидетельства (не обязательно):</span>
          <input type="text" class="form-control mt-2" placeholder="Введите дату">
        </label>
        <div class="valid-feedback"></div>
      </div>
      <div class="mb-3 col-12 col-md-6 pl-md-3 d-flex align-items-end">
        <label class="w-100">
          <span>БИК банка:</span>
          <input type="text" class="form-control mt-2" placeholder="Введите БИК">
        </label>
        <div class="valid-feedback"></div>
      </div>
    </div>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3 d-flex align-items-end">
        <label class="w-100">
          <span>Расчетный счет:</span>
          <input type="text" class="form-control mt-2" placeholder="Введите номер">
        </label>
        <div class="valid-feedback"></div>
      </div>
      <div class="mb-3 col-12 col-md-6 pr-md-3 d-flex align-items-end">
        <label class="w-100">
          <span>ФИО заполнителя анкеты:</span>
          <input type="text" class="form-control mt-2" placeholder="Введите ФИО">
        </label>
        <div class="valid-feedback"></div>
      </div>
    </div>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3 d-flex align-items-end">
        <label class="w-100">
          <span>ФИО директора:</span>
          <input type="text" class="form-control mt-2" placeholder="Введите ФИО">
        </label>
        <div class="valid-feedback"></div>
      </div>
      <div class="mb-3 col-12 col-md-6 pl-md-3 d-flex align-items-end">
        <label class="w-100">
          <span>Телефон:</span>
          <input type="text" class="form-control mt-2" placeholder="Введите телефон">
        </label>
        <div class="valid-feedback"></div>
      </div>
    </div>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3 d-flex align-items-end">
        <label class="w-100">
          <span>Основания действий директора:</span>
          <input type="text" class="form-control mt-2" placeholder="...">
        </label>
        <div class="valid-feedback"></div>
      </div>
      <div class="mb-3 col-12 col-md-6 pl-md-3 d-flex align-items-end">
        <label class="w-100">
          <span>Email:</span>
          <input type="text" class="form-control mt-2" placeholder="Введите email">
        </label>
        <div class="valid-feedback"></div>
      </div>
    </div>
    <div class="form-row">
      <div class="mb-3 col-12 col-md-6 pr-md-3 d-flex align-items-end">
        <label class="w-100">
          <span>Сайт (не обязательно)</span>
          <input type="text" class="form-control mt-2" placeholder="Введите ссылку на ваш сайт">
        </label>
        <div class="valid-feedback"></div>
      </div>
    </div>
    <div class="form-row">
      <div class="mb-3 col-12 d-flex align-items-end">
        <label class="w-100">
          <span>Комментарий (не обязательно)</span>
          <textarea class="form-control mt-2" placeholder="Введите текст..." rows="3"></textarea>
        </label>
        <div class="valid-feedback"></div>
      </div>
    </div>
    <button class="btn btn-primary" type="submit">Отправить</button>
  </form>
</template>

<script setup>
</script>

<style scoped>

</style>
