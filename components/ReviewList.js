app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template: /*html*/
  `<div class="review-container">
    <h3>Reviews:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        {{ review.name }} gave this {{ review.rating }} stars
        <br />
        <span v-show="review.recommend === 'Yes'"> and would recommend this product</span>
        <br />
        <i>"{{ review.review }}"</i>
      </li>
    </ul>
  </div>`,
});
