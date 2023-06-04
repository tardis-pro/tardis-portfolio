import * as THREE from "three";

export const vertexShader = `
varying vec3 vPos;
void main()	{
  vPos = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
}
`;
export const fragmentShader = `

varying vec3 vPos;
uniform vec3 size;
uniform float thickness;
uniform float smoothness;

void main() {
        
  float a = smoothstep(thickness, thickness + smoothness, length(abs(vPos.xy) - size.xy));
  a *= smoothstep(thickness, thickness + smoothness, length(abs(vPos.yz) - size.yz));
  a *= smoothstep(thickness, thickness + smoothness, length(abs(vPos.xz) - size.xz));
  
  vec3 c = mix(vec3(1), vec3(0), a);
  
  gl_FragColor = vec4(c, 0.1);
}
`;


export const materialBorderGen = (geom) => {
    const uniforms = {
        diffuse: {
            value: 2
        },
        smoothness: {
            value: 0.1
        },
        color: {
            value: new THREE.Color('skyblue')
        }
    };
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;

    const context = canvas.getContext('2d');
    const gradient = context.createRadialGradient( canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2 );
    gradient.addColorStop(0.1, 'rgba(0,59,111,1)');
    // gradient.addColorStop(0.25, 'rgba(0,59,111,0.5)');

    gradient.addColorStop(1, 'rgba(0,59,111,1)');


    context.fillStyle = gradient;
    context.fillRect(0, 0,  canvas.width, canvas.height);
    const shadowTexture = new THREE.CanvasTexture( canvas );
    if (geom) {
        // uniforms.lightmap = {
        //     lightMap: geom.attributes.normal,
        //     lightMapIntensity: geom.attributes.normal
        // }
    }
    return new THREE.MeshPhongMaterial({
        normalMap: geom.attributes.normal,
        // alphaMap:geom.attributes.normal,
        // wireframe: true,
        shininess: 0,
        // color: 0xe0e0e0,
        map: shadowTexture,
    });
}