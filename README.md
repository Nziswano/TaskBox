# Storybook React Tutorial

- [Tutorial](https://www.learnstorybook.com/intro-to-storybook/react/en/get-started/)

## Setup

- Using create react app - Storybook 3.5
  - `npx -p @storybook/cli sb init --type react_scripts`
- Storybook - port 9009

```json
"storybook": "start-storybook -p 9009 -s public --ci"
```

- Add tutorial codes as a remote resource so one can checkout the resources

```sh
git remote add learn https://github.com/chromaui/learnstorybook-code.git
git fetch learn
git restore -s learn/master -- src/index.css
git restore -s learn/master -- public/font
git restore -s learn/master -- public/icon
```

## Notes

### Build a simple component

- Had to write a function to handle evenPropogation

```jsx
const handleClick = e => {
  e.stopPropagation();
};
onClick = { handleClick };
```

- href attribute is required

```jsx
{
  state !== "TASK_ARCHIVED" && (
    <a href="*" onClick={() => onPinTask(id)}>
      <span className={`icon-star`} />
    </a>
  );
}
```

- Have to distinguish between the _storiesOf_ api and _Component Story Format(CSF)_ - [Story snapshot](https://github.com/storybookjs/storybook/tree/master/addons/storyshots/storyshots-core)
