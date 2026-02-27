import { icon, socialIcons, internetSVG, phoneSVG, locationSVG } from "./icons";

export default function Template56(data) {
  return `

<table cellpadding="0" cellspacing="0" style="font-family:Helvetica, sans-serif;font-size:14px;color:#333;">
  <tr>
    ${data.photo ? `<td style="padding-right:15px;border-right:3px dotted #EC4899;"><img src="${data.photo}" width="90" style="border-radius:50%;display:block;"/></td>` : ""}
    <td style="padding-left:15px;">
      <div style="font-size:18px;font-weight:bold;color:#EC4899;">${data.name}</div>
      <div style="font-size:14px;margin-bottom:8px;">${data.title} ${data.company ? `| <span style="font-weight:600">${data.company}</span>` : ''}</div>
      ${data.email ? `<div style="margin-bottom:8px;"><a href="mailto:${data.email}" style="color:#EC4899;text-decoration:none;font-weight:500">${data.email}</a></div>` : ''}
      <div style="font-size:12px;margin-bottom:8px;">
        
    ${data.phone ? `<span style="color:#EC4899">${icon(phoneSVG, 'tel:'+data.phone, '#EC4899')}</span> ${data.phone}<br/>` : ''}
    ${data.website ? `<span style="color:#EC4899">${icon(internetSVG, data.website, '#EC4899')}</span> <a href="${data.website}" style="color:#EC4899;text-decoration:none;">${data.website}</a><br/>` : ''}
    ${data.address ? `<span style="color:#EC4899">${icon(locationSVG, 'https://maps.google.com/?q='+data.address, '#EC4899')}</span> ${data.address}<br/>` : ''}
  
      </div>
      <div>
        
    ${data.socials && data.socials.length > 0 ? 
      data.socials.map(s => s.url && socialIcons[s.platform] ? icon(socialIcons[s.platform], s.url, '#EC4899') : '').join('') 
    : ''}
  
      </div>
    </td>
  </tr>
</table>`;
}
