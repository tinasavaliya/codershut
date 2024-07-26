<template>
  <div class="float-start w-100 tab-with-slider bg-darkGreen">
    <div class="container pe-0 ps-0">
      <div class="text-center">
        <h4 class="text-white fw-semibold page-title">We Work With</h4>
      </div>
      <ul
        class="
          wow
          fadeInUp
          nav
          tab-nav
          nav-pills
          wow
          fadeInUp
          justify-content-center
          px-4
        "
        id="pills-tab"
        role="tablist"
      >
        <li
          class="tab-nav-item"
          role="presentation"
          v-for="(tab, index) in tabs"
          :key="index"
        >
          <a
            class="
              tab-nav-link
              fw-semibold
              page-description
              text-white
              opacity-70
            "
            :class="{ active: currentTab(index) }"
            :id="'pills-' + tab.id + '-tab'"
            data-bs-toggle="pill"
            :data-bs-target="'#' + tab.id"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
            >{{ tab.title }}
            <div class="tab-nav-border"></div>
          </a>
        </li>
      </ul>
      <div class="tab-content wow fadeInUp" id="pills-tabContent">
        <div
          class="tab-pane fade"
          v-for="(tab, i) in tabs"
          :key="i"
          :id="tab.id"
          role="tabpanel"
          :aria-labelledby="'pills-' + tab.id + '-tab'"
          :class="{ 'active show': currentTab(i) }"
        >
          <div class="tab-slider d-flex justify-content-lg-center">
            <div
              class="
                work-box
                d-flex
                justify-content-center
                align-items-center
                bg-lightGreen
                flex-column
              "
              v-for="(item, idx) in tab.tech"
              :key="idx"
            >
              <img
                :src="getIconUrl(item.icon)"
                :alt="item.title"
                class="img-fluid pb-2"
              />
              <p class="fw-semibold text-white page-description">
                {{ item.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabSlider",
  data() {
    return {
      tabs: [
        {
          id: "mobile",
          tech: [
            { title: "iOS", icon: "ios.png" },
            { title: "Android", icon: "Android.png" },
            { title: "Flutter", icon: "Flutter.png" },
            { title: "ReactNative", icon: "ReactNative.png" },
            { title: "Titanium", icon: "Titanium.png" },
            { title: "Swift", icon: "Swift.png" },
            { title: "iOS", icon: "ios.png" },
          ],
          title: "Mobile",
          isActive: true,
        },
        {
          id: "front-end",
          tech: [
            { title: "Flutter", icon: "Flutter.png" },
            { title: "ReactNative", icon: "ReactNative.png" },
            { title: "Titanium", icon: "Titanium.png" },
            { title: "Swift", icon: "Swift.png" },
            { title: "iOS", icon: "ios.png" },
          ],
          title: "Front End",
          isActive: false,
        },
        {
          id: "back-end",
          tech: [
            { title: "iOS", icon: "ios.png" },
            { title: "Android", icon: "Android.png" },
            { title: "Flutter", icon: "Flutter.png" },
            { title: "ReactNative", icon: "ReactNative.png" },
            { title: "Titanium", icon: "Titanium.png" },
            { title: "Swift", icon: "Swift.png" },
            { title: "iOS", icon: "ios.png" },
          ],
          title: "Back End",
        },
        {
          id: "database",
          tech: [
            { title: "Flutter", icon: "Flutter.png" },
            { title: "ReactNative", icon: "ReactNative.png" },
            { title: "Titanium", icon: "Titanium.png" },
            { title: "Swift", icon: "Swift.png" },
            { title: "iOS", icon: "ios.png" },
          ],
          title: "Database",
        },
        {
          id: "cms",
          tech: [
            { title: "iOS", icon: "ios.png" },
            { title: "Android", icon: "Android.png" },
            { title: "Flutter", icon: "Flutter.png" },
            { title: "ReactNative", icon: "ReactNative.png" },
            { title: "Titanium", icon: "Titanium.png" },
            { title: "Swift", icon: "Swift.png" },
            { title: "iOS", icon: "ios.png" },
          ],
          title: "CMS",
        },
        {
          id: "infra-devops",
          tech: [
            { title: "Flutter", icon: "Flutter.png" },
            { title: "ReactNative", icon: "ReactNative.png" },
            { title: "Titanium", icon: "Titanium.png" },
            { title: "Swift", icon: "Swift.png" },
            { title: "iOS", icon: "ios.png" },
          ],
          title: "Infra Devops",
        },
      ],
      // active: false,
    };
  },
  methods: {
    getIconUrl(icon) {
      return require("../assets/images/" + icon);
    },
    currentTab(i) {
      if (i === 0) {
        return true;
      }
      return false;
    },
  },
};
</script>
 

