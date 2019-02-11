uniform sampler2D tex;
void main()
{     
     vec4 color = texture2D(tex,gl_TexCoord[0].st);
     if (mod(gl_FragCoord.y, 2.0) < 1.0) discard;
     else gl_FragColor = color;
}