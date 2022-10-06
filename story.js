const founders = document.querySelector('#founders');

const storyBoxPart = document.querySelector('.story__box_part');

const partners = document.querySelector('#partners');

const storyBoxPartOne = document.querySelector('.story__box_part_one')

const futures = document.querySelector('#futures')

const storyBoxPartTwo = document.querySelector('.story__box_part_two')


founders.onmouseover = function(event) {
  const founders = event.founders;
  storyBoxPart.style.opacity = '1';
  storyBoxPart.classList.remove('story_up')
  storyBoxPartOne.classList.add('story_up')
  storyBoxPartTwo.classList.add('story_up')
  };

partners.onmouseover = function (event) {
  const partners = event.partners;
  storyBoxPartOne.style.opacity = '1';
  storyBoxPartOne.classList.remove('story_up')
  storyBoxPart.classList.add('story_up')
  storyBoxPartTwo.classList.add('story_up')
  };

futures.onmouseover = function (event) {
  const futures = event.futures;
  storyBoxPartTwo.style.opacity = '1';
  storyBoxPartTwo.classList.remove('story_up')
  storyBoxPartOne.classList.add('story_up')
  };


