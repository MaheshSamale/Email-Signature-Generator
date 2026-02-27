import { icon, socialIcons, internetSVG, phoneSVG, locationSVG } from "./icons";

export default function Template67(data) {
  return `

<table cellpadding="0" cellspacing="0" width="450" style="font-family:Verdana, sans-serif;font-size:14px;color:#333;table-layout:fixed;">
  <tr>
    <td width="35%" style="vertical-align:top;padding-right:10px;">
      ${data.photo ? `<img src="${data.photo}" width="100%" style="max-width:120px;border-radius:20px;display:block;margin-bottom:10px;"/>` : ""}
      <div style="font-size:16px;font-weight:bold;color:#14B8A6;">${data.name}</div>
      <div style="font-size:13px;">${data.title}</div>
    </td>
    <td width="5%" style="border-left:2px dashed #14B8A6;"></td>
    <td width="60%" style="vertical-align:top;padding-left:10px;">
      ${data.company ? `<strong style="color:#14B8A6;font-size:15px;">${data.company}</strong>` : ''}
      ${data.email ? `<div style="margin-top:8px;"><a href="mailto:${data.email}" style="color:#555;text-decoration:none;font-weight:600;">${data.email}</a></div>` : ''}
      <div style="font-size:12px;margin-top:8px;">
        
    ${data.phone ? `<span style="color:#14B8A6">${icon(phoneSVG, 'tel:'+data.phone, '#14B8A6')}</span> ${data.phone}<br/>` : ''}
    ${data.website ? `<span style="color:#14B8A6">${icon(internetSVG, data.website, '#14B8A6')}</span> <a href="${data.website}" style="color:#14B8A6;text-decoration:none;">${data.website}</a><br/>` : ''}
    ${data.address ? `<span style="color:#14B8A6">${icon(locationSVG, 'https://maps.google.com/?q='+data.address, '#14B8A6')}</span> ${data.address}<br/>` : ''}
  
      </div>
      <div style="margin-top:10px;">
        
    ${data.socials && data.socials.length > 0 ? 
      data.socials.map(s => s.url && socialIcons[s.platform] ? icon(socialIcons[s.platform], s.url, '#14B8A6') : '').join('') 
    : ''}
  
      </div>
    </td>
  </tr>
</table>`;
}
