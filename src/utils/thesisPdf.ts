/**
 * Utility to download the Thesis PDF document
 */
export function downloadThesisPDF() {
  const content = `%PDF-1.4
%âãÏÓ
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj
2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj
3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Resources <<
/Font <<
/F1 4 0 R
/F2 5 0 R
>>
>>
/Contents 6 0 R
>>
endobj
4 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica-Bold
>>
endobj
5 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj
6 0 obj
<< /Length 1200 >>
stream
BT
/F1 18 Tf
50 720 Td
(UNIVERSIDAD NACIONAL EXPERIMENTAL FRANCISCO DE MIRANDA) Tj
/F1 14 Tf
0 -24 Td
(TRABAJO ESPECIAL DE GRADO - UNEFM 2025) Tj
/F2 11 Tf
0 -20 Td
(Licenciatura en Desarrollo Empresarial) Tj
0 -15 Td
(Autor: Ilan Irausquin | Promedio Academico: 17/20) Tj
0 -30 Td
/F1 13 Tf
(TITULO DE LA INVESTIGACION:) Tj
/F2 11 Tf
0 -18 Td
(Analisis de las dinamicas competitivas del comercio minorista mediante) Tj
0 -14 Td
(las 5 Fuerzas de Porter y su aplicacion estrategica en Bodegon Rodrigues 2004.) Tj
0 -25 Td
/F1 12 Tf
(RESUMEN EJECUTIVO Y HALLAZGOS EMPIRICOS:) Tj
/F2 10 Tf
0 -16 Td
(1. Diagnostico de mercado: Evaluacion cuantitativa y cualitativa de clientes activos.) Tj
0 -14 Td
(2. Insight clave: Demanda desatendida de consumo in-situ frente a compra para llevar.) Tj
0 -14 Td
(3. Decision estrategica: Aprobacion y construccion de la terraza exterior.) Tj
0 -14 Td
(4. Campana y Resultados: 2.527 likes, 686 compartidos directos, ~$0.10 costo/conversacion.) Tj
0 -14 Td
(5. Modelo de Porter: Reduccion de la rivalidad mediante diferenciacion de experiencia.) Tj
0 -25 Td
/F1 12 Tf
(ESTRUCTURA DEL DOCUMENTO:) Tj
/F2 10 Tf
0 -15 Td
(- Capitulo I: El Problema, Justificacion y Objetivos de la Investigacion.) Tj
0 -13 Td
(- Capitulo II: Marco Teorico y Modelo de las Cinco Fuerzas de Michael Porter.) Tj
0 -13 Td
(- Capitulo III: Marco Metodologico y Tecnicas de Recoleccion de Datos de Campo.) Tj
0 -13 Td
(- Capitulo IV: Analisis de Resultados y Diagnostico de Bodegon Rodrigues 2004.) Tj
0 -13 Td
(- Capitulo V: Propuesta Estrategica y Lineamientos de Crecimiento Comercial.) Tj
0 -30 Td
/F1 10 Tf
(Documento academico certificado para revision profesional. Contacto: ilanelallan1106@gmail.com) Tj
ET
endstream
endobj
xref
0 7
0000000000 65535 f 
0000000015 00000 n 
0000000068 00000 n 
0000000125 00000 n 
0000000262 00000 n 
0000000344 00000 n 
0000000421 00000 n 
trailer
<<
/Size 7
/Root 1 0 R
>>
startxref
1700
%%EOF`;

  const blob = new Blob([content], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Ilan_Irausquin_Tesis_UNEFM_2025.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
