import { icon, socialIcons, internetSVG, phoneSVG, locationSVG } from "./icons";

export default function Template68(data) {
  return `

<table cellpadding="0" cellspacing="0" style="font-family:Helvetica, sans-serif;font-size:13px;color:#444;border-top:3px dotted #0F172A;padding-top:10px;">
  <tr>
    <td>
      <div style="font-size:16px;font-weight:bold;color:#0F172A;">${data.name}</div>
      <div style="margin-bottom:4px;">${data.title} ${data.company ? `- ${data.company}` : ''}</div>
      ${data.email ? `<div><a href="mailto:${data.email}" style="color:#0F172A;text-decoration:none;">${data.email}</a></div>` : ''}
      <div style="font-size:11px;margin-top:4px;">
        
    ${data.phone ? `<span style="color:#0F172A">${icon(phoneSVG, 'tel:'+data.phone, '#0F172A')}</span> ${data.phone}<br/>` : ''}
    ${data.website ? `<span style="color:#0F172A">${icon(internetSVG, data.website, '#0F172A')}</span> <a href="${data.website}" style="color:#0F172A;text-decoration:none;">${data.website}</a><br/>` : ''}
    ${data.address ? `<span style="color:#0F172A">${icon(locationSVG, 'https://maps.google.com/?q='+data.address, '#0F172A')}</span> ${data.address}<br/>` : ''}
  
      </div>
      <div style="margin-top:6px;">
        
    ${data.socials && data.socials.length > 0 ? 
      data.socials.map(s => s.url && socialIcons[s.platform] ? icon(socialIcons[s.platform], s.url, '#0F172A') : '').join('') 
    : ''}
  
      </div>
    </td>
    ${data.photo ? `<td style="padding-left:15px;"><img src="${data.photo}" width="60" style="border-radius:50%;display:block;"/></td>` : ""}
  </tr>
</table>`;
}
