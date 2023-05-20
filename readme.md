# The Challenge

- Build a drawer menu similar to the one shown in the animation below

```
sample.gif
```

- Add a couple of random screens based on the following pattern:

```
DrawerMenu(one in a gif)
   tab navigator (bottom tab navigation)
       home (stack navigation)
           screen1
           screen2
       contact
```

<aside>
⚠️ Have in mind that on the GIF above, tab navigation isn’t present, please add it according above pattern.

</aside>

Requirements

- The screen should be built using React Native
- Use of Typescript is required
- Tab navigation needs to be configured (as above)
- Pay attention that the Drawer needs to be a parent component of other children

# Evaluation Criteria

Your submission will be evaluated on the following aspects of your project:

1. **React Code** (optimizations, structuring, and logic) **[This is very important to us]**
2. UI (how similar it looks to the UI).
3. How well navigation is integrated. (According to above mentioned navigation pattern)
4. The functionality of the application.
5. Use of https://github.com/software-mansion/react-native-reanimated will be advantage.

# **Duration**

2-3 hours to send deliverable (+30 min to compile a short README file explaining your system and thought process). Please add a video/gif of the final product and how it looks like.

# **Deliverable**

Access to GitHub repo or zip file

---

---

- src/app/index: the project main entry point

- src/app/providers: contains all the providers from diferent kind of libraries (navigations, local storage management, etc)

- src/app/screens: contains al the screens used in the application, optionally we could use a folder with the name 'organisms' inside components/ui following the atomic design pattern

- src/theme: usually contains generic styles or data used for styles

- assets: contains multimedia files used in the application

- recording.gif: the recording video
