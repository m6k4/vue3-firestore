<template>
  <div class="TheFooter">
    <div class="TheFooter__content">
      <div class="TheFooter__name">
        <p>App name</p>
      </div>
      <div>&copy; Zuzel 2023</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.TheFooter {
  overflow: auto;

  &__content {
    color: #8e8e8e;
    font-size: 0.8rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10% 2%;
  }
  &__name {
    text-transform: uppercase;
  }
}
</style>
