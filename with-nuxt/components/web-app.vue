<template>
  <div>
    <div>Hello {{name}}</div>
  </div>
</template>

<script>
const webapp = window.Telegram.WebApp;

export default {
  name: 'WebApp',
  data() {
    let name;
    const user = webapp.initDataUnsafe.user;

    if (user) {
      let { first_name, last_name } = user;
      name = `${first_name} ${last_name}`
    } else {
      name = 'Anonymous';
    }

    return {
      name
    }
  }
}
</script>
