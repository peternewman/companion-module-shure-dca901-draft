/**
 * INTERNAL: initialize variables.
 *
 * @access protected
 * @since 1.0.0
 */
export function updateVariables() {
	// variable_set
	var variables = []

	for (let i = 1; i <= 19; i++) {
		let prefix = this.api.getChannel(i).prefix
		let label =
			i >= 1 && i <= 8
				? `Channel ${i}`
				: i == 9
				? `Automix Out Mono`
				: i >= 10 && i <= 17
				? ` Output ${i - 9}`
				: i == 18
				? 'Mix A'
				: 'Mix B'
				// Automix Mono, Automix Stereo, PFL

		variables.push({ variableId: `${prefix}_name`, name: `${label} Name` })
		variables.push({ variableId: `${prefix}_audio_name`, name: `${label} Network Audio Name` })

		if (i <= 8) {
			variables.push({ variableId: `${prefix}_audio_gain`, name: `${label} Gain` })
			variables.push({ variableId: `${prefix}_audio_gain_post_gate`, name: `${label} Gain Post Gate` })
			variables.push({ variableId: `${prefix}_audio_mute`, name: `${label} Mute` })
			variables.push({ variableId: `${prefix}_audio_mute_post_gate`, name: `${label} Mute Post Gate` })
			/*variables.push({ variableId: `${prefix}_always_on_enable_a`, name: `${label} Always On Enable A` })
			variables.push({ variableId: `${prefix}_always_on_enable_b`, name: `${label} Always On Enable B` })
			variables.push({ variableId: `${prefix}_input_audio_gate_a`, name: `${label} Input Gate A` })
			variables.push({ variableId: `${prefix}_input_audio_gate_b`, name: `${label} Input Gate B` })*/
			variables.push({ variableId: `${prefix}_automix_gate_out_ext_signal`, name: `${label} Automixer Gate Out External Signal` })
			variables.push({ variableId: `${prefix}_beam_width`, name: `${label} Beam Width` })
			variables.push({ variableId: `${prefix}_beam_x`, name: `${label} Beam X` })
			variables.push({ variableId: `${prefix}_beam_y`, name: `${label} Beam Y` })
			variables.push({ variableId: `${prefix}_beam_z`, name: `${label} Beam Z` })
			variables.push({ variableId: `${prefix}_beam_x_af`, name: `${label} Beam X Autofocus` })
			variables.push({ variableId: `${prefix}_beam_y_af`, name: `${label} Beam Y Autofocus` })
			variables.push({ variableId: `${prefix}_beam_z_af`, name: `${label} Beam Z Autofocus` })
			for (let j = 1; j <= 4; j++) {
				variables.push({ variableId: `${prefix}_parametric_eq_${j}_state`, name: `${label} Parametric EQ ${j} State` })
			}
		} else if (i == 9) {
			variables.push({ variableId: `${prefix}_audio_gain`, name: `${label} Gain` })
			variables.push({ variableId: `${prefix}_audio_mute`, name: `${label} Mute` })
		} else if (i >= 18) {
			variables.push({ variableId: `${prefix}_audio_gain`, name: `${label} Gain` })
			variables.push({ variableId: `${prefix}_audio_mute`, name: `${label} Mute` })
			/*variables.push({ variableId: `${prefix}_intellimix_mode`, name: `${label} IntelliMix Mode` })
			variables.push({ variableId: `${prefix}_limiter_engaged`, name: `${label} Limited Engaged` })*/
		}

		variables.push({ variableId: `${prefix}_clip_indicator`, name: `${label} Clip Indicator` })
	}

	/*for (let i = 1; i <= 2; i++) {
		variables.push({ variableId: `dfr${i}_assigned_chan`, name: `DFR ${i} Assigned Channel` })
		variables.push({ variableId: `dfr${i}_bypass`, name: `DFR ${i} Bypass` })
		variables.push({ variableId: `dfr${i}_freeze`, name: `DFR ${i} Freeze` })
	}*/

	for (let i = 1; i <= 10; i++) {
		variables.push({ variableId: `preset_${i}_name`, name: `Preset ${i} Name` })
	}

	variables.push({ variableId: 'device_id', name: 'Device ID' })
	variables.push({ variableId: 'model', name: 'Model' })
	variables.push({ variableId: 'firmware_version', name: 'Firmware Version' })
	variables.push({ variableId: 'control_mac_address', name: 'Control MAC Address' })
	variables.push({ variableId: 'audio_device_name', name: 'Network Audio Device Name' })
	variables.push({ variableId: 'primary_audio_ip', name: 'Primary Audio IP' })
	variables.push({ variableId: 'primary_audio_subnet', name: 'Primary Audio Subnet' })
	variables.push({ variableId: 'primary_audio_gateway', name: 'Primary Audio Gateway' })
	variables.push({ variableId: 'flash', name: 'Flash' })
	variables.push({ variableId: 'preset', name: 'Preset' })
	/*variables.push({ variableId: 'auto_link_mode', name: 'Auto Link Mode' })*/
	variables.push({ variableId: 'meter_rate', name: 'Meter Rate' })
	variables.push({ variableId: 'meter_rate_pre_comp', name: 'Meter Rate Pre Comp' })
	variables.push({ variableId: 'meter_rate_post_gate', name: 'Meter Rate Post Gate' })
	variables.push({ variableId: 'meter_rate_mixer_gain', name: 'Meter Rate Mixer Gain' })
	variables.push({ variableId: 'led_brightness', name: 'LED Brightness' })
	variables.push({ variableId: 'led_color_muted', name: 'LED Color Muted' })
	variables.push({ variableId: 'led_color_unmuted', name: 'LED Color Unmuted' })
	variables.push({ variableId: 'led_state_muted', name: 'LED State Muted' })
	variables.push({ variableId: 'led_state_unmuted', name: 'LED State Unmuted' })
	variables.push({ variableId: 'mute_status_led_state', name: 'Mute Status LED State' })
	variables.push({ variableId: 'led_in_state', name: 'LED In State' })
	variables.push({ variableId: 'bypass_all_eq', name: 'Bypass All EQ' })
	variables.push({ variableId: 'eq_contour', name: 'EQ Contour' })
	variables.push({ variableId: 'num_active_mics', name: 'Number of Active Mics' })

	this.setVariableDefinitions(variables)
}
