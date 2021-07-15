<template>
  <div class="bg-white dark:bg-gray-700 rounded-xl">
    <div
      class="
        px-4
        py-6
        overflow-hidden
        sm:px-6 sm:py-8
        lg:p-12
        xl:p-16
        flex
        items-center
      "
    >
      <div>
        <h2 class="text-2xl font-semibold font-display sm:text-3xl">
          We&#x27;ve got more coming...
        </h2>
        <p class="mt-2 max-w-xl text-base">
          Want to hear from us when we add new components? Sign up for our
          newsletter and we&#x27;ll email you every time we release a new batch
          of components.
        </p>
        <form>
          <div class="sm:flex jusitfy-start mt-6">
            <form
              class="
                flex flex-col
                md:flex-row
                w-3/4
                md:w-full
                max-w-sm
                md:space-x-3
                space-y-3
                md:space-y-0
                justify-center
              "
            >
              <div class="relative">
                <input type="text" class="form-control" placeholder="Email" />
              </div>
              <button class="flex-shrink-0 btn btn-primary" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </form>
      </div>
      <div class="w-1/2">
        <img
          class="w-72 mx-auto"
          src="https://bengalcoder.com/wp-content/uploads/2020/01/bengal-coder-community.svg"
          alt="Bengal Coder Community"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
