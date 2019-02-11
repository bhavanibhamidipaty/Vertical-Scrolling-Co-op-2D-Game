uniform sampler2D tex;
uniform float time;
uniform bool flatcolor;

vec3 reducirSaturacion(vec3 color, float K)
{
     return mix(vec3( dot(color, vec3(0.30, 0.59, 0.11)) ), color, K);
}
void main()
{
     vec4 color;
	if(flatcolor) color = gl_Color;
	else color = texture2D(tex,gl_TexCoord[0].st);

     if(time < 1) gl_FragColor = vec4(reducirSaturacion(color.rgb,1-time),color.a);
     else gl_FragColor = vec4(reducirSaturacion(color.rgb,0),color.a);
     if(time > 1) gl_FragColor = mix(gl_FragColor,vec4(0,0,0,gl_FragColor.a),time-1);
}