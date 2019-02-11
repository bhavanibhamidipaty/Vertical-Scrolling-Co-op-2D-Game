uniform sampler2D tex;
uniform float time;
uniform bool flatcolor;
void main()
{
    vec4 color;
    if(flatcolor) color = gl_Color;
    else color = texture2D(tex,gl_TexCoord[0].st);
    gl_FragColor = mix(color,vec4(0,0,0,color.a),time);
}