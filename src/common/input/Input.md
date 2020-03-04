Primary inputs:

```js
<Input
    styles={{ size: 'sm', marginRight: 1 }}
    placeholder='Input me'
/>
<Input
    styles={{ marginRight: 1 }}
    placeholder='Input me'
/>
<Input
    styles={{ size: 'lg' }}
    placeholder='Input me'
/>
```

Secondary inputs:

```js
<Input
    styles={{ size: 'sm', type: 'secondary', marginRight: 1 }}
    placeholder='Input me'
/>
<Input
    styles={{ type: 'secondary', marginRight: 1 }}
    placeholder='Input me'
/>
<Input
    styles={{ size: 'lg', type: 'secondary' }}
    placeholder='Input me'
/>
```

Colored:
```js
<Input
    styles={{ marginRight: 1, colored: true }}
    placeholder='Input me'
/>
<Input
    styles={{ type: 'secondary', colored: true }}
    placeholder='Input me'
/>
```

Block
```js
<Input
    styles={{ marginBottom: 1, block: true }}
    placeholder='Input me'
/>
<Input
    styles={{ type: 'secondary', marginBottom: 1, block: true }}
    placeholder='Input me'
/>
<Input
    styles={{ marginRight: 1, marginBottom: 1, ghost: true, block: true }}
    placeholder='Input me'
/>
<Input
    styles={{ marginRight: 1, link: true, block: true }}
    placeholder='Input me'
/>
```

Disabled
```js
<Input
    styles={{ marginRight: 1 }}
    disabled
    placeholder='Input me disabled'
/>
<Input
    styles={{ marginRight: 1, type: 'secondary' }}
    disabled
    placeholder='Input me disabled'
/>
<Input
    styles={{ marginRight: 1, colored: true }}
    disabled
    placeholder='Input me disabled'
/>
<Input
    styles={{ type: 'secondary', colored: true, marginTop: 1 }}
    disabled
    placeholder='Input me disabled'
/>
```