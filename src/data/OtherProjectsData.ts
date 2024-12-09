import ProjectData from '@/data/ProjectData.ts'

export default [

    new ProjectData("project-7", "Opengl Mesh Loader", "img/projects/opengl/monke.png", `
    <div class="paragraph">
      In this <strong>Opengl Mesh loader</strong> . I have created a simple mesh loader using opengl and c++ and assimp and managed to import the default blender monkey into the scene.This also has a simple dot lighting .
      <br/>
            </div>
            <div class="paragraph">
            <img class="pc-screenshot" src="img/projects/opengl/monke.png" alt="Opengl Mesh Loader Screenshot" />
                
            <div class="paragraph center">
              <a href="https://github.com/Harish-85/openglLearning" target="_blank"> Github Link</a>
          </div>


    `, "#c10606", false, false),
    new ProjectData("project-8", "Car Physics & Car Destruction", "img/projects/thesis/image8.gif", `
    <div class="paragraph">
                This is a thesis I wrote on how to make a realtime car destruction system in unity using JOBS system.
                The car physics system that is used is also a custom wheel collider system that I have created.
            </div>

            <div class="notice">
              <a href="https://github.com/Harish-85/Realtime-Car-Destruction-Unity/blob/main/Thesis%20with%20jobs.pdf" target="_blank"> Thesis Link</a><br>
              Source code available on <a href="https://github.com/Harish-85/Realtime-Car-Destruction-Unity" target="_blank">GitHub</a>.
          </div>
            <div class="paragraph center">
                <img class="pc-screenshot" src="img/projects/thesis/image8.gif" alt="Car destruction demonstration" />
                
            </div>
          <div class="paragraph">
          Main features :
          <ul>
          <li>Custom Arcade style wheel physics</li>
          <li>Realtime multithreaded mesh deformation</li>
          <li>Breakable car parts</li>
          
          </ul>
      </div>

           

            `),
    new ProjectData("project-9", "Nikolable", "img/projects/project-9-icon.png", `
     <div class="paragraph">
                <strong>Nikolable</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
                <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@goumbik">Lukas</a>.
            </div>

            <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

            <div class="paragraph">
              <div class="notice">
                Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
              </div>
            </div>`),
];